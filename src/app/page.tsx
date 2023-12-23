import { Link, Text } from '@chakra-ui/react'
import React from "react";

export default function Home() : JSX.Element{
  return (<main>
    <div>
    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
    </Link>
    <Text fontSize="6xl">Hello World</Text>
      </div>
    </main>
  )
}
