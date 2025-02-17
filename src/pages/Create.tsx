import React, { useEffect, useRef } from "react";

import Layout from "../layouts/Layout";

// The editor core
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import editorJsColumns from "@calumk/editorjs-columns";

const Create: React.FC = () => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    console.log("in");
    console.log(editorRef.current);
    if (editorRef.current) {
      console.log("in 2");
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Let`s make a flyer!",
        tools: {
          columns: {
            class: editorJsColumns,
            config: {
              tools: {
                delimiter: Delimiter,
                header: Header,
                image: Image
              },
              EditorJsLibrary: EditorJS, //ref EditorJS - This means only one global thing
            },
          },
          delimiter: Delimiter,
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              placeholder: "Enter a header",
              levels: [1, 2, 3],
              defaultLevel: 2,
            },
          },
          image: {
            class: Image,
          },
        },
        onReady: () => {
          console.log("Editor.js is ready!");
        },
        onChange: () => {
          console.log("Content changed!");
        },
      });

      editorRef.current = editor;
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <Layout>
      <h1>Create</h1>
      <div id="editorjs" ref={editorRef} style={{ padding: "20px", minHeight: "300px" }}></div>
    </Layout>
  );
};

export default Create;
