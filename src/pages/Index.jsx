import React from "react";
import { Box, Heading, Text, Image, Button, Stack, Grid, GridItem, Container, Flex, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTI4NDc0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="100vh" display="flex" alignItems="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="4xl" color="white" mb={4}>
            Discover the Elegance of Jazz Ville
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Exquisite jewelry crafted with passion and precision
          </Text>
          <Button colorScheme="teal" size="lg">
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" textAlign="center" mb={10}>
            Featured Collections
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1617146114195-9ec4b45b4416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbmVja2xhY2V8ZW58MHx8fHwxNzEyODQ3NDA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Necklace" />
              <Text fontSize="xl" fontWeight="bold" mt={4}>
                Elegant Necklaces
              </Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1493050261174-9e48e90f6773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwZWFycmluZ3N8ZW58MHx8fHwxNzEyODQ3NDA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Earrings" />
              <Text fontSize="xl" fontWeight="bold" mt={4}>
                Stylish Earrings
              </Text>
            </GridItem>
            <GridItem>
              <Image src="https://images.unsplash.com/photo-1586878341341-b2fe743d5ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFjZWxldHN8ZW58MHx8fHwxNzEyODQ3NDA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Bracelets" />
              <Text fontSize="xl" fontWeight="bold" mt={4}>
                Luxury Bracelets
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex alignItems="center">
            <Box flex={1} mr={10}>
              <Heading as="h2" size="2xl" mb={4}>
                About Jazz Ville
              </Heading>
              <Text fontSize="lg" mb={6}>
                Jazz Ville is a visionary jewelry brand that combines elegance, craftsmanship, and contemporary design. We believe in creating timeless pieces that reflect the unique style and personality of the wearer.
              </Text>
              <Button colorScheme="teal" size="lg">
                Learn More
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwcHJvY2Vzc3xlbnwwfHx8fDE3MTI4NDc0MDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="About Us" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Instagram Feed Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" textAlign="center" mb={10}>
            Follow Us on Instagram
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <Image src="https://images.unsplash.com/photo-1535556261192-f718879e7f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZmxhdGxheXxlbnwwfHx8fDE3MTI4NDc0MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Instagram 1" />
            <Image src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbGlmZXN0eWxlfGVufDB8fHx8MTcxMjg0NzQwNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Instagram 2" />
            <Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwY2xvc2V1cHxlbnwwfHx8fDE3MTI4NDc0MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Instagram 3" />
            <Image src="https://images.unsplash.com/photo-1558882268-15aa056d885f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbW9kZWx8ZW58MHx8fHwxNzEyODQ3NDA2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Instagram 4" />
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" py={10} color="white">
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8}>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                About Us
              </Heading>
              <Text>Jazz Ville is a visionary jewelry brand that combines elegance, craftsmanship, and contemporary design.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Contact Us
              </Heading>
              <Text>
                Email: info@jazzville.com
                <br />
                Phone: +1 123-456-7890
              </Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={4}>
                Follow Us
              </Heading>
              <Flex>
                <Icon as={FaInstagram} boxSize={6} mr={4} />
                <Icon as={FaFacebook} boxSize={6} mr={4} />
                <Icon as={FaTwitter} boxSize={6} />
              </Flex>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
