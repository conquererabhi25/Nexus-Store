"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { ButtonSubmit } from "./ButtonSubmit";
import { type actionFunction } from "@/app/utils/types";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        alt={name}
        priority
        className="rounded object-cover mb-4 w-[200px] h-[200px]"
      />
      <Button variant="outline" size="sm" onClick={()=>setIsUpdateFormVisible((prev)=>!prev)}>{text}</Button>
    
        {isUpdateFormVisible && (
          <div className="max-w-md mt-4">
            <FormContainer action={action}>
              {props.children}
              <ImageInput />
              <ButtonSubmit text={text} size="sm" />
            </FormContainer>
          </div>
        )}
      
    </div>
  );
}

export default ImageInputContainer;
