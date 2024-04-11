import { gql, GraphQLClient } from "graphql-request";

type AssetCreationCreds = {
  data: {
    createAsset: {
      id: string
      url: string
      upload: {
        status: string
        expiresAt: string
        error: string | null
        requestPostData: {
          url: string
          date: string
          key: string
          signature: string
          algorithm: string
          policy: string
          credential: string
          securityToken: string
        }
      }
    }
  }
}

function createClient(endpoint: string, token: string) {
  return new GraphQLClient(
    endpoint,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

async function createAsset(client: GraphQLClient) {
  const mutation = gql`
    mutation createAsset {
      createAsset(data: {}) {
        id
        url
        upload {
          status
          expiresAt
          error {
            code
            message
          }
          requestPostData {
            url
            date
            key
            signature
            algorithm
            policy
            credential
            securityToken
          }
        }
      }
    }`

  return await client.request(mutation);
}

function getAssetCreationCreds(assetCreationCreds: AssetCreationCreds) {
  const { id, url } = assetCreationCreds.data.createAsset;
  const { date, key, signature, algorithm, policy, credential, securityToken } = assetCreationCreds.data.createAsset.upload.requestPostData

  return {
    id,
    url,
    creds: {
      "X-Amz-Date": date,
      key,
      "X-Amz-Signature": signature,
      "X-Amz-Algorithm": algorithm,
      policy,
      "X-Amz-Credential": credential,
      "X-Amz-Security-Token": securityToken,
    }
  }
}

async function uploadAsset(createdAsset: AssetCreationCreds, file: any) {
  const assetCreationCreds = getAssetCreationCreds(createdAsset)

  const response = $fetch(assetCreationCreds.url, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: {
      ...assetCreationCreds.creds,
      file
    }
  })
}

export default defineEventHandler(async (event) => {
  const formData = await readBody(event)

  const { hygraphToken, hygraphEndpoint } = useRuntimeConfig()
  const client = createClient(hygraphEndpoint, hygraphToken)

  // Mutation to create image
  const createdAsset = await createAsset(client);

  // POST to endpoint to upload image
  await uploadAsset(createdAsset as AssetCreationCreds, formData.files[0])

  const { title, theme, speakerName, sessionType, speakerImage } = formData;

  // Mutation to create session and connect image
  const mutation = gql`
    mutation CreateSession($title: String, $theme: String, $speakerName: String, $sessionType: SessionType, $imageId: ID) {
      createSession(
        data:{
          title: $title,
          theme: $theme,
          speakerName: $speakerName
          sessionType: $sessionType,
          speakerImage: { connect: { id: $imageId }}
        }
      ) {
        id
        title
        theme
        speakerName
        sessionType
        speakerImage {
          id
        }
      }
    }
  `;


  return {
    hello: 'world'
  }
})