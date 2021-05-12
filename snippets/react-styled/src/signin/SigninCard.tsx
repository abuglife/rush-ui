import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SigninForm from "./SigninForm";
import SocialSigninButton from "./components/SocialSigninButton";
import { Helmet } from "react-helmet";
import { Alert } from "@material-ui/lab";
import SeparateLineWithText from "./components/SeparateLineWithText";
import { RequestStatus } from "./enum/request.enum";

interface SigninFormDto {
  email: string;
  password: string;
}

const SigninPage = () => {
  const [data, setData] = useState({
    response: null,
    error: null,
    errorFields: null,
    status: RequestStatus.Nop,
  });

  const onSubmit = async (data: SigninFormDto) => {
    try {
      setData({
        response: null,
        error: null,
        errorFields: null,
        status: RequestStatus.Loading,
      });
      setTimeout(() => {
        // Http Request
      }, 2000);
    } catch (error) {
      setData({
        response: null,
        error: error?.message,
        errorFields: error?.errors,
        status: RequestStatus.Error,
      });
    }
    return data;
  };

  return (
    <>
      <Helmet>
        <title>SignIn Page</title>
      </Helmet>
      <PageContainer>
        <Card>
          <CardBody>
            <AppLogo />
            <PageTitleContainer>
              <PageTitle>Signin to:</PageTitle>
              <PageSubTitle>Accounting</PageSubTitle>
            </PageTitleContainer>
            <AppFormContainer>
              <SigninForm message="Sign up" onSubmit={onSubmit}></SigninForm>
            </AppFormContainer>

            <SeparateLineWithText text="OR" />
            <SocialSigninContainer>
              <SocialSigninButton
                text="Signin with Google"
                logo="/assets/images/social/google.png"
                type="button"
              />

              <SocialSigninButton
                text="Signin with Line"
                logo="/assets/images/social/line.png"
                type="button"
              />

              <SocialSigninButton
                text="Signin with Microsoft"
                logo="/assets/images/social/microsoft.png"
                type="button"
              />
            </SocialSigninContainer>
          </CardBody>
        </Card>
      </PageContainer>
    </>
  );
};

const AppFormContainer = styled.div`
  ${tw`mb-10`}
`;

const PageTitleContainer = styled.div`
  ${tw`text-center mb-4`}
`;

const PageTitle = styled.div`
  ${tw`text-on-background opacity-50`}
`;

const PageSubTitle = styled.div`
  ${tw`font-bold text-primary`}
`;

const AppLogoContainer = styled.div`
  ${tw`mb-8 bg-surface`}
`;

const AppLogoImage = styled.img`
  ${tw`mx-auto h-20 w-auto mb-2 opacity-75 mix-blend-difference`}
`;

const AppTitle = styled.div`
  ${tw`text-center text-xl font-extrabold text-on-background`}
`;

const AppLogo = () => {
  return (
    <AppLogoContainer>
      <AppLogoImage src="/assets/images/signin/logo-white.png" />
      <AppTitle>ABugLife Studio</AppTitle>
    </AppLogoContainer>
  );
};

const Card = styled.div`
  ${tw`shadow-xl bg-surface py-20 px-6 z-40 rounded-lg w-full h-full flex flex-col items-center justify-center min-h-screen
    md:( h-auto min-h-0 py-12 )
  `}
`;

const CardBody = styled.div`
  ${tw`w-full max-w-xs`}
`;

const SocialSigninContainer = styled.div`
  & > * {
    ${tw`mb-2`}
  }
  & > *:last-child {
    ${tw`mb-0`}
  }
`;

interface PageContainerProps {
  children: ReactNode;
}
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Page>
      <PageBgBelow></PageBgBelow>
      <PageBgUpper></PageBgUpper>
      <PageBgOverlay></PageBgOverlay>
      <PageBody>{children}</PageBody>
    </Page>
  );
};

const Page = styled.div`
  ${tw`h-full min-h-screen relative flex items-center justify-center p-0 bg-background py-0
    md:(py-4)
  `}
`;

const PageBgBelow = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full z-10 bg-cover bg-center mix-blend-multiply`}
  background-image: url(/assets/images/signin/bg1.svg);
`;
const PageBgUpper = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full z-20 bg-cover bg-center mix-blend-multiply`}
  background-image: url(/assets/images/signin/bg.png);
`;

const PageBgOverlay = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full bg-primary opacity-5 z-30 mix-blend-multiply`}
`;
const PageBody = styled.div`
  ${tw`max-w-full w-full space-y-8 relative z-40 flex items-center
    md:( max-w-md )
  `}
`;

export default SigninPage;