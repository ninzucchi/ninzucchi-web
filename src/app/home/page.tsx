import { Section } from "@/components/Section";
import { Grid } from "@/components/Grid";
import { GridItem } from "@/components/GridItem";
import { Bio, BioParagraph, BioLink } from "@/components/Bio";
import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 md:pt-24 max-w-2xl mx-auto">
      {/* Visual Element */}

      {/* Introduction */}
      <Section>
        <Bio>
          <Heading>Hi, I&apos;m Nick.</Heading>

          <BioParagraph>
            I&apos;m a product designer and front-end engineer at{" "}
            <BioLink href="https://substack.com">Substack</BioLink>, where
            we&apos;re creating a new economic engine for culture.
          </BioParagraph>

          <BioParagraph>
            Before Substack, I developed features at{" "}
            <BioLink href="https://meta.com">Meta</BioLink> to protect the
            platform from abuse, ensure fair elections, and respond to global
            security threats.
          </BioParagraph>

          <BioParagraph>
            Prior to that, I was an interaction designer at{" "}
            <BioLink href="https://ideo.com">IDEO</BioLink>, where I helped
            global brands like Google, Ford, Bayer and American Express launch
            best-in-class digital experiences.
          </BioParagraph>

          <BioParagraph>I live in the Mission, San Francisco.</BioParagraph>
        </Bio>
      </Section>
      <Separator className="mb-12" />
      {/* Previous Experience */}
      <Section title="Experience">
        <Grid>
          <GridItem
            title="Substack"
            link="https://substack.com"
            description="Senior Product Designer"
            subtitle="2020-Present"
          />

          <GridItem
            title="Meta"
            link="https://meta.com"
            description="Product Design Lead"
            subtitle="2016-2020"
          />

          <GridItem
            title="IDEO"
            link="https://ideo.com"
            description="Interaction Design Lead"
            subtitle="2012-2016"
          />
        </Grid>
      </Section>

      {/* Education */}
      <Section title="Credentials">
        <Grid>
          <GridItem
            title="Carnegie Mellon"
            link="https://cmu.edu"
            description="MS, Human Computer Interaction"
            subtitle="2012"
          />

          <GridItem
            title="Vassar College"
            link="https://vassar.edu"
            description="BA, Cognitive Science"
            subtitle="2011"
          />
        </Grid>
      </Section>
    </main>
  );
}
