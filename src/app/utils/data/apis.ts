export type Parameter = {
  name: string;
  type: string;
  fomrat?: string;
  in: string;
  description?: string;
  example?: any;

  // default
  required: boolean;
}

export type Response = {
    code: number;
    description: string;
    contentType?: string;
    example?: any;
    model?: object;
}

export type Api = {
  url: string;
  method: string;
  description?: string;
  parameters: Parameter[];
  responses: Response[];
}

const Apis: Api[] = [
    {
        url: '/',
        method: 'GET',
        description: 'some get method',
        parameters: [],
        responses: [],
    },
    {
        url: '/some',
        method: 'POST',
        description: 'some post method',
        parameters: [
            {
                name: 'id',
                type: 'integer',
                fomrat: 'int64',
                in: 'path',
                description: 'id to post',
                required: true,
            },
            {
                name: 'file',
                type: 'file',
                in: 'formData',
                description: 'file to upload',
                required: false,
            },
            
        ],
        responses: [],
    },
    {
        url: '/other',
        method: 'PUT',
        description: 'some put method',
        parameters: [],
        responses: [],
    },
    {
        url: '/url',
        method: 'DELETE',
        description: 'some delete method',
        parameters: [],
        responses: [],
    },
    {
        url: '/and/another/{one}',
        method: 'PATCH',
        description: 'some patch method',
        parameters: [],
        responses: [],
    }
] 

export default Apis;
