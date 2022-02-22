import { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Td,
  Th,
  Thead,
  Tr,
  Tbody,
  Text,
  useBreakpointValue,
  Spinner
} from '@chakra-ui/react';

import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';

import { Header } from "../../components/Header";
import { Sidbar } from "../../components/Sidbar";

import { useUsers } from '../../services/hooks/useUsers';

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidbar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading
              size="lg"
              fontWeight="normal"
            >
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}

              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>

          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usúrios</Text>
            </Flex>
          ) : (

            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox />
                    </Th>
                    <Th>Usúario</Th>

                    {isWideVersion && <Th>Data de Cadastro</Th>}

                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.users?.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                      </Tr>
                    )
                  })}
                  {/* <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Mouzinho Raimundo</Text>
                        <Text fontSize="sm" color="gray.300">mdumundo18@gmail.com</Text>
                      </Box>
                    </Td>

                    {isWideVersion && <Td>03 de Janeiro, 2022</Td>}

                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  </Tr> */}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}