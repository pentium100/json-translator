import CodeEditor from "@uiw/react-textarea-code-editor";

export function EndpointList(props: any) {
  const { endpoints, onClickEndpoint } = props;
  return (
    <div className="p-2">
      <pre> Endpoints: {'You can also POST to /api/endpoint/[EndpointId] with BODY {"prompt": "..."} to get the result.'}</pre>
      <div className="flex flex-row flex-wrap">
        {endpoints.map((endpoint: any, index: number) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-100" key={index} onClick={() => onClickEndpoint(endpoint)}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{endpoint.typeName}</div>
              <div className="mt-2">
                <CodeEditor
                  name="schema"
                  value={endpoint.schema || ""}
                  language="typescript"
                  padding={15}
                  style={{
                    maxHeight: 300,
                    fontSize: 12,
                    fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    overflow: "scroll",
                  }}
                />
              </div>
              <div className="mt-2">EndpointId: {endpoint.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
