import {
  Box,
  Flex,
  Heading,
  // Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
  useBreakpoint,
} from '@chakra-ui/react';

import Image from 'next/image';
import profilePic from '../public/static/images/profile.jpg';

import Link from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import AboutTerminal from '@/components/AboutTerminal';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  const bp = useBreakpoint() as string;
  return (
    <>
      <NextSeo title='Home' />

      <Box
        minH='100vh'
        height='full'
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='7xl'
        mx='auto'
        pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
      >
        <Flex
          direction='column'
          justifyContent={{ base: 'center', md: 'flex-start' }}
          height='full'
          width='full'
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems='center'
            mx='auto'
            my={{ xl: '16' }}
          >
            <Skeleton isLoaded={imageLoad} boxSize='250px' borderRadius='2xl' m='auto'>
              <Image
                // flexGrow={3}

                // borderRadius='2xl'
                // boxSize='250px'
                src={profilePic}
                // objectFit='cover'
                alt='Roland Király'
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
            <Flex
              alignSelf='center'
              direction='column'
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
              flexGrow={1}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(`teal.600`, `teal.400`)}, ${useColorModeValue(
                  `blue.600`,
                  `blue.300`
                )})`}
                className='moving-grad'
                bgClip='text'
                fontSize={{ base: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Hi, I&apos;m Roland!
              </Heading>
              <chakra.p
                maxW='650px'
                textAlign={{ base: `center`, lg: `left` }}
                fontSize='xl'
                mt={2}
              >
                Welcome to my website! You can find some of my{' '}
                <Link href='/projects' passHref>
                  <ChakraLink>projects</ChakraLink>
                </Link>{' '}
                , and test things out. Sometimes I even write to my{' '}
                <Link href='/blog' passHref>
                  <ChakraLink>blog</ChakraLink>
                </Link>
                .
              </chakra.p>
            </Flex>
          </Flex>
          {!['base', 'sm'].includes(bp) && <AboutTerminal />}
        </Flex>
      </Box>
    </>
  );
}
