import React from 'react';
import { Questionnaire, QuestionnaireResponse } from '@medplum/fhirtypes';
import IntakeForm from '@/models/questionnaire/initial-intake.json';
import { QuestionnaireForm } from '@medplum/react';
import Auth from "@/utils/medplum/auth";
import { MEDPLUM_CLIENT_ID, MEDPLUM_CLIENT_SECRET, MEDPLUM_URL } from '@/medplum';
import { Container } from '@mantine/core';

import { MedplumClient } from '@medplum/core';
import { MedplumProvider } from '@medplum/react';
import Head from 'next/head';

const medplum = new MedplumClient({
  baseUrl: MEDPLUM_URL,
  onUnauthenticated: () => {
    const paths = ['/forms', '/register', '/login', '/signin', '/success'];
    if (paths.some(path => window.location.pathname.startsWith(path))) {
      console.log({ unauthorized: 'allowed' });
    } else {
      window.location.href = '/?next=' + encodeURIComponent(window.location.pathname + window.location.search);
    }
  },
});

const FormsDemo = ({ auth_token, questionnaire }: { auth_token: string, questionnaire: Questionnaire }) => {

  // @TODO: Check there's no existing token, as this might overwrite it
  medplum.setAccessToken(auth_token);

  const title = `Proxie - ${questionnaire.title || 'Form'}`

  return (
    <div className="w-screen h-screen flex">
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={`/api/og/?title=${encodeURIComponent(questionnaire.title || '')}`} key="og:image" />
      </Head>
      <Container>
        <MedplumProvider medplum={medplum}>
          {/* <h1>{questionnaire.title}</h1> */}
          {/* @TODO: OnSubmit button breaks, perhaps is trying to POST answers, we could create a token that can write to QR and monitor the dashboard for intake or forward to p0 */}
          <QuestionnaireForm
            questionnaire={questionnaire as Questionnaire}
            onSubmit={(response: QuestionnaireResponse) => {
              if (response && response.resourceType) {
                console.log(response)
              } else {
                console.log('Response or resourceType is undefined');
              }
            }} />
        </MedplumProvider>
      </Container>
    </div>
  )
};

export default FormsDemo;

export const getServerSideProps = async () => {
  const auth_token = await Auth.token(MEDPLUM_CLIENT_ID, MEDPLUM_CLIENT_SECRET, 'Questionnaire.rs ');


  return {
    props: {
      auth_token: auth_token?.access_token || '',
      questionnaire: IntakeForm as Questionnaire,
    }
  }
};
