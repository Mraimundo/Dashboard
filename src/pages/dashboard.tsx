import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidbar } from '../components/Sidbar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tootip: {
    enabled: false,
  },
  // xaxis: {
  //   type: 'datetime',
  //   axisBorder: {
  //     color: theme.colors.gray[600]
  //   },
  //   axisTicks: {
  //     color: theme.colors.gray[600]
  //   },
  //   categories: [
  //     '2021-03-18T00:00:00.000Z',
  //     '2021-03-19T00:00:00.000Z',
  //     '2021-03-20T00:00:00.000Z',
  //     '2021-03-21T00:00:00.000Z',
  //     '2021-03-22T00:00:00.000Z',
  //     '2021-03-23T00:00:00.000Z',
  //     '2021-03-24T00:00:00.000Z',
  //   ],
  // },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dart',
      opacityFron: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  { name: 'series', data: [31, 120, 10, 20, 61, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidbar />

        <SimpleGrid flex="1" gap="4" minChildWidth="280" align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontFamily="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontFamily="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}