import React from 'react';
import {
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import LineHeading from '@/components/LineHeading';
import ToolGrid from '@/components/ToolGrid';
import { AiFillApi, AiFillWindows, AiOutlineDesktop } from 'react-icons/ai';
import { SiAdobexd } from 'react-icons/si';
import { NextSeo } from 'next-seo';

function Tools(): React.ReactElement {
  return (
    <>
      <NextSeo title="Tools" />
      <Flex
        direction="column"
        alignItems="center"
        width="full"
        minH="100vh"
        mx="auto"
        maxW="6xl"
      >
        <LineHeading
          mt="28"
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign="center"
        >
          Tools
        </LineHeading>
        <Text mt={3}>Tools that I find useful</Text>
        <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          align="center"
          w="100%"
          mt="10"
          mb="24"
        >
          <TabList display="flex" flexWrap="wrap">
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `pink.800`,
                bg: `pink.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillWindows} />
                <Text>Windows</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `purple.800`,
                bg: `purple.100`,
              }}
              mr={2}
              mt={2}
              s
            >
              <HStack spacing={1}>
                <Icon as={SiAdobexd} />
                <Text>UI/UX</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `blue.800`,
                bg: `blue.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiOutlineDesktop} />
                <Text>Web</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `teal.800`,
                bg: `teal.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillApi} />
                <Text>API</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ToolGrid filter="windows" />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter="ui/ux" />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter="web" />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter="api" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default Tools;
