import styled from "styled-components";

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.color.TEXT_2};
  font-size: 1.25em;
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.color.TEXT_2};
  font-size: 1em;
  font-weight: 400;
`;

type HeaderProps = {
  title: string;
  description?: string;
};

export function SectionHeader({ title, description }: HeaderProps) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
    </>
  );
}
