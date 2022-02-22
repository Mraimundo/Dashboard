import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha ogrigatório'),
})

export default function SignIn() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState
  // const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
  //   event?.preventDefault();
  //   console.log(values)
  // }

  async function handleSignIn(values: any) {
    await new Promise(resolve => setTimeout(resolve, 4000));
    // event?.preventDefault();
    router.push("/dashboard")
    console.log(values)
  }

  return (
    <Flex
      w="100wv"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />

          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          <Link href="/dashboard">
            Entrar
          </Link>
        </Button>
      </Flex>
    </Flex>
  )
}
