import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  number: number;
  iscurrent?: boolean;
}

export function PaginationItem({ iscurrent = false, number }: PaginationItemProps) {
  if (iscurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.300'
      }}
    >
      {number}
    </Button>
  )
}