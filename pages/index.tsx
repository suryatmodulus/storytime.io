import Head from 'next/head';
import Link from 'next/link';
import {Component} from 'react';
import ReactGA from 'react-ga';
import {Box, Flex} from 'rebass';
import {ChatWidget, Papercups} from '@papercups-io/chat-widget';
import {RightCircleOutlined, GithubOutlined} from '../components/icons';
import {
  colors,
  Button,
  Content,
  Footer,
  Header,
  Layout,
  Menu,
  Paragraph,
  Title,
  Text,
} from '../components/common';

export default class extends Component {
  componentDidMount() {
    const {NEXT_PUBLIC_GA_TRACKING_ID} = process.env;

    if (NEXT_PUBLIC_GA_TRACKING_ID) {
      ReactGA.initialize(NEXT_PUBLIC_GA_TRACKING_ID);
      ReactGA.pageview(document.location.pathname);
    }
  }

  render() {
    return (
      <Layout style={{background: colors.white}}>
        <Head>
          <title>
            Storytime by Papercups | Open Source Live Chat + Screen Sharing
          </title>
          <link rel="icon" href="/storytime-logo.svg" />
          <meta
            name="description"
            content="Storytime is the easiest way to support users, allowing you to see what they’re doing in real-time while also chatting with them live."
          ></meta>
        </Head>

        <Header style={{background: 'transparent'}}>
          <Flex>
            <Box flex={1}>
              <Link href="/">
                <a>
                  <img src="storytime-logo.svg" style={{height: 40}} />
                </a>
              </Link>
            </Box>

            <Box>
              <Menu style={{borderBottom: 'none'}} mode="horizontal">
                <Menu.Item style={{margin: '0 1em'}} key="blog">
                  <a
                    href="https://papercups.io/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="pricing">
                  <a
                    href="https://papercups.io/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pricing
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="github">
                  <a
                    href="https://github.com/papercups-io/storytime"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Menu.Item>
                <Menu.Item style={{margin: '0 1em'}} key="Sign up">
                  <a
                    href="https://app.papercups.io/login?redirect=/sessions/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </Menu.Item>
              </Menu>
            </Box>
          </Flex>
        </Header>

        <Content>
          <Box mx="auto" style={{maxWidth: 960}} py={5} px={4}>
            <Box pt={80} mx={[0, 4]} mb={5}>
              <Box mb={5} sx={{textAlign: 'center'}}>
                <Title level={1}>
                  Observe and interact with your users, live.
                </Title>

                <Paragraph>
                  Open source customer messaging with built-in screen sharing
                  through the browser. 🚀
                </Paragraph>

                <Flex
                  my={3}
                  sx={{justifyContent: 'center', alignItems: 'center'}}
                >
                  <Box mr={2}>
                    <a
                      href="https://github.com/papercups-io/storytime"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        type="default"
                        size="large"
                        icon={<GithubOutlined />}
                      >
                        Github
                      </Button>
                    </a>
                  </Box>
                  <Box mr={2}>
                    <a
                      href="https://app.papercups.io/register?redirect=/sessions/getting-started"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        type="primary"
                        size="large"
                        icon={<RightCircleOutlined />}
                      >
                        Get started for free
                      </Button>
                    </a>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box mx={[0, 4]} mb={6}>
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                  width: '100%',
                  height: 400,
                }}
              >
                <iframe
                  src="https://www.loom.com/embed/62ab4e7a881b4b60a67134c32e6a7899"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </Flex>
            </Box>

            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="online-collab.svg"
                  />
                </Flex>
              </Box>
              <Box flex={1} mx={[0, 4]} my={[4, 0]}>
                <Title level={3}>View and collaborate in real time</Title>
                <Paragraph>
                  Watch how your users are interacting with your website and
                  chat with them in real time. See exactly what they're seeing
                  and help them with anything they need.
                </Paragraph>
              </Box>
            </Flex>

            <Flex
              mb={[5, 6]}
              mx={[0, -4]}
              flexDirection={['column-reverse', 'row']}
            >
              <Box flex={1} mx={[0, 4]} my={[4, 0]}>
                <Title level={3}>Built with security in mind</Title>
                <Paragraph>
                  Password inputs, iframes, and other sensitive data are blocked
                  by default. Customize which elements are blocked with simple
                  CSS class tags to protect user privacy.
                </Paragraph>
              </Box>

              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="secure-v2.svg"
                  />
                </Flex>
              </Box>
            </Flex>

            <Flex mb={[5, 6]} mx={[0, -4]} flexDirection={['column', 'row']}>
              <Box flex={1} mx={[0, 4]} mb={[4, 0]}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 320,
                    }}
                    src="online-message.svg"
                  />
                </Flex>
              </Box>

              <Box flex={1} mx={[0, 4]} my={[4, 0]}>
                <Title level={3}>Chat directly with your users</Title>
                <Paragraph>
                  Convert more website visitors into customers with real-time
                  chat. Don't lose out on prospects because of unanswered
                  questions!
                </Paragraph>
              </Box>
            </Flex>

            <Flex justifyContent="center" mb={[4, 5]} mt={[6, 0]}>
              <Title level={2}>Papercups for Enterprise</Title>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Self-managed</Title>
                <Paragraph>
                  Papercups can be deployed in your cloud, for painless adoption
                  and onboarding. Whether it's AWS, Docker, or Heroku, we've got
                  you covered.
                </Paragraph>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Unlimited volume</Title>
                <Paragraph>
                  Papercups is built with Elixir on top of BEAM for incredible
                  scalability. This scalability extends to our open core pricing
                  model.
                </Paragraph>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} flexDirection="column">
                <Title level={3}>Personalized support</Title>
                <Paragraph>
                  We can manage your deployment on your infrastructure. Get the
                  benefits of self-hosting with the reliability and scalability
                  of the cloud.
                </Paragraph>
              </Flex>
            </Flex>

            <Flex justifyContent="center" mb={[3, 4]} mt={[6, 0]}>
              <Title level={2}>Connect with us</Title>
            </Flex>

            <Flex
              mx={-3}
              justifyContent="space-between"
              mb={6}
              flexDirection={['column', 'row']}
            >
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://join.slack.com/t/papercups-io/shared_invite/zt-h0c3fxmd-hZi1Zp8~D61S6GD16aMqmg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="slack-v1.svg" style={{height: 144}} />
                </a>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://github.com/papercups-io/storytime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="github-v1.svg" style={{height: 144}} />
                </a>
              </Flex>
              <Flex flex={1} mx={3} my={[3, 0]} justifyContent="center">
                <a
                  href="https://discord.gg/Dq2A3eh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="discord-color.svg" style={{height: 144}} />
                </a>
              </Flex>
            </Flex>

            <Flex
              mb={5}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Title level={1}>What's new?</Title>

              <Flex my={4} mx={-2}>
                <Box mx={2}>
                  <a
                    href="https://github.com/papercups-io/papercups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="large">Find out on Github</Button>
                  </a>
                </Box>
                <Box mx={2}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<RightCircleOutlined />}
                    onClick={Papercups.toggle}
                  >
                    Ask us!
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Content>

        <Footer style={{backgroundColor: '#001529'}}>
          <Box p={5}>
            <Text style={{color: colors.white}}>
              Made with ❤️ in SF &amp; NYC
            </Text>
          </Box>
        </Footer>

        <ChatWidget
          title="Welcome to Papercups!"
          subtitle="Ask us anything in the chat window below 😊"
          greeting="Hi there! Send us a message and we'll get back to you as soon as we can. In the meantime, check out our [demo](https://app.papercups.io/demo)!"
          primaryColor="#1890ff"
          accountId="eb504736-0f20-4978-98ff-1a82ae60b266"
          iconVariant="filled"
          requireEmailUpfront
          showAgentAvailability
        />
      </Layout>
    );
  }
}
