import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex>
      <Box mr="4" textAlign="right">
        <Text>Mouzinho Raimundo</Text>
        <Text color="gray.300" fontSize="small">
          mdumundo18@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Mouzinho Raimundo" />
    </Flex>
  )
}