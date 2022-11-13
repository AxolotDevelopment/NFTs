import { Image } from "@chakra-ui/image";
import { Text, Link, Container, Box } from "@chakra-ui/layout";
import { Heading, Flex, Icon, List, ListItem } from "@chakra-ui/react";
import TwitterIcon from "../icon/TwitterIcon";
import InstagramIcon from "../icon/InstagramIcon";
import DiscordIcon from "../icon/DiscordIcon";
import MediumIcon from '../icon/MediumIcon';
import YoutubeIcon from '../icon/YoutubeIcon';

const urlLists = [
  {
    title: "Resources",
    items: [
      { text: "Blog", url: "https://blog.tokenize.io/" },
      { text: "Docs", url: "https://docs.tokenize.io/" },
      { text: "Audit", url: "https://github.com/TokenizeNFT/audits" }
    ]
  },
  {
    title: "Get Involved",
    items: [
      { text: "Stake", url: "https://docs.tokenize.io/tokenize-governance-token-frak/staking-frak" },
      { text: "DAO", url: "https://dao.tokenize.io/#/" },
      { text: "Github", url: "https://github.com/TokenizeNFT" },
    ]
  },
  {
    title: "Need Help?",
    items: [
      { text: "How it Works", url: "https://docs.tokenize.io/marketplace/get-started" },
      { text: "Tutorials", url: "https://www.youtube.com/channel/UCUpcKyPeUJ2Mhx7OWOSZL6w" },
      { text: "Support", url: "https://discord.com/invite/P6fCPvtZtq" }
    ]
  }
]

const socials = [
  { url: "https://twitter.com/tokenizenft", icon: TwitterIcon },
  { url: "https://www.instagram.com/tokenize.io/", icon: InstagramIcon },
  { url: "https://discord.com/invite/P6fCPvtZtq", icon: DiscordIcon },
  { url: "https://www.youtube.com/channel/UCUpcKyPeUJ2Mhx7OWOSZL6w", icon: YoutubeIcon },
  { url: "https://blog.tokenize.io/", icon: MediumIcon },
]

const Footer: React.FC = () => {
  return (
    <Container
      maxW={["95%"]}
      py={["10rem"]}
    >
      <Flex direction={["column", "column", "row", "row"]} justify="space-between">
        <Box alignItems="start" flex={["1 1", "0.6 1", "1 1", "0.6 1"]}>
          <Image src="/tokenize-full-logo.png" w={["100%", "320px"]}/>
          <Text fontSize={16} my="40px" lineHeight="30px" fontWeight={500} color="grey.500">
            Tokenize is a community first project, with a mission to to empower
            artists to be in full control of their work and have unlimited
            creative freedom.
          </Text>

          <Box>
            <Flex direction="row" justify="space-evenly" gap={16} mb="4rem">
              {socials.map(({url, icon}, idx) => (
                <Link href={url} isExternal rel="noreferrer noopener" key={`social-${idx}`}>
                  <Icon as={icon} w="48px" h="48px" />
                </Link>
              ))}
            </Flex>
          </Box>
          <Text fontSize={10}>
            © Tokenize Technologies Ltd.
          </Text>
        </Box>


      {urlLists.map(({title, items}, idx) => (
        <Flex direction="column" key={`footer-list-${idx}`}>
        <Heading as="h6" variant="footer">{title}</Heading>
        <List>
          {items.map(({url, text}, lidx) => (
            <ListItem key={`footer-${idx}-${lidx}`}>
              <Link
                  href={url}
                  isExternal
                  rel="noreferrer noopener"
                  display="flex"
                  alignItems="center"
                >
                <Text as="span" variant="footer">{text}</Text>
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
      ))}
      </Flex>
    </Container>
  );
};

export default Footer;
