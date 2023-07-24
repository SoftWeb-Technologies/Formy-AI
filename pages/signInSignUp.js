import { Amplify, Auth } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";
import { images } from "../core/images";
import Link from "next/link";

import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);

export default function SignInSignUp() {
  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();

      return Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
    },
  };

  return (
    <>
      <div className="flex items-center w-[85%] mx-auto pt-5">
        <div className="w-[29px] md:w-[40px]">
          <Image
            src={images.darkLogoImg}
            alt="FormAi-logo"
            width="100%"
            className="object-fill"
          />
        </div>
        <Link href={"/"} className="flex items-center">
          <span className="text-2xl md:text-3xl font-semibold text-black">
            FormyAI
          </span>
        </Link>
      </div>
      <Authenticator
        services={services}
        initialState="signUp"
        className="h-screen -mt-10"
      >
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </>
  );
}
