import EthLogoBlack from "../../assets/icons/icon-eth-black.svg";
import EthLogoColor from "../../assets/icons/icon-eth-logo.svg";
import { abbreviateNumber, formatUSDPriceString } from "../../util/string";
import { StatsBlockProps, StyledStatBadgeProps } from "./index.interface";
import * as Styled from "./index.styled";

export const StatBadge = ({
  label,
  value,
  isETH,
  isUSD,
  onClick,
  isDarkTheme,
}: StyledStatBadgeProps) => {
  const minValue = 0.0005;
  const content = (
    <Styled.StatBadgeContainer isDarkTheme={isDarkTheme}>
      <Styled.Row>
        {isETH && (
          <Styled.EthIcon
            src={isDarkTheme ? EthLogoColor : EthLogoBlack}
            alt="ETH"
          />
        )}
        <Styled.Value>
          {value < minValue && value > 0 && "<"}
          {isUSD ? formatUSDPriceString(value) : abbreviateNumber(value)}
        </Styled.Value>
      </Styled.Row>
      <Styled.Label>{label}</Styled.Label>
    </Styled.StatBadgeContainer>
  );

  if (onClick) {
    return (
      <Styled.StatButton
        onClick={onClick}
        aria-label={label}
        isDarkTheme={isDarkTheme}
      >
        {content}
      </Styled.StatButton>
    );
  }

  return content;
};

export function StatsBlock({ stats, isDarkTheme }: StatsBlockProps) {
  return (
    <Styled.StatsBlockWrapper isDarkTheme={isDarkTheme}>
      {stats.map((stat, index) => (
        <StatBadge
          key={`${stat.label}-${index}`}
          isDarkTheme={isDarkTheme}
          {...stat}
        />
      ))}
    </Styled.StatsBlockWrapper>
  );
}
export default StatsBlock;
