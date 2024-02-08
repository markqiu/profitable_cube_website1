// components/builder.tsx
"use client";

import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react"; 
import DefaultErrorPage from "next/error";

// Replace with your Public API Key
builder.init('731e5bcf63684aeabfbb6572ff37ab9b');

// Define an interface for the BuilderPageProps object 
// with a `content` property type `any`
interface BuilderPageProps { 
  content: any;
}

export function RenderBuilderContent({ content }: BuilderPageProps) { 
  // Call the useIsPreviewing hook to determine if 
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing(); 

  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }
  
  // If the `content` is falsy and the page is 
  // not being previewed in Builder, render the 
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />; 
}
