import { memo } from "react";
import { useTheme } from "styled-components";
import IconDelete from "../../Icons/IconDelete";
import IconEdit from "../../Icons/IconEdit";
import IconPreview from "../../Icons/IconPreview";
import IconWarning from "../../Icons/IconWarning";
import { Loader } from "../../Loader";
import { PriceLabel } from "../../PriceLabel";
import { PriceLabelWrapper } from "../../PriceLabel/index.styled";
import { ProfileBadge } from "../../Profile/ProfileBadge";
import { Text } from "../../Text";
import { ActionProps, Props, ScreeningState } from "./index.interface";
import { STRINGS } from "./index.strings";
import * as Styled from "./index.styled";

const NftImageMemo = memo(({ imgSrc }: { imgSrc: string }) => (
  <Styled.NftImage imgSrc={imgSrc} />
));
NftImageMemo.displayName = "NftImageMemo";

const ActionButtons = ({ onPreview, onEdit, onDelete }: ActionProps) => {
  const { color } = useTheme();

  return (
    <Styled.ButtonGroup>
      {onPreview && (
        <Styled.IconButton onClick={onPreview}>
          <IconPreview fill={color.TEXT_1} />
          <Styled.IconText>{STRINGS.preview}</Styled.IconText>
        </Styled.IconButton>
      )}
      {onEdit && (
        <Styled.IconButton onClick={onEdit}>
          <IconEdit fill={color.TEXT_1} />
          <Styled.IconText>{STRINGS.edit}</Styled.IconText>
        </Styled.IconButton>
      )}
      {onDelete && (
        <Styled.IconButton onClick={onDelete}>
          <IconDelete fill={color.TEXT_1} />
          <Styled.IconText>{STRINGS.delete}</Styled.IconText>
        </Styled.IconButton>
      )}
    </Styled.ButtonGroup>
  );
};

export function PreviewTile({
  creatorImgSrc,
  creatorName,
  itemCount,
  nftImgSrc,
  subtitle,
  title,
  ethPrice,
  dollarPrice,
  forSale = true,
  onPreview,
  onEdit,
  onDelete,
  screeningState,
}: Props) {
  const { color } = useTheme();
  return (
    <Styled.PreviewContainer>
      <Styled.ContentWrapper>
        <ProfileBadge displayName={creatorName} imgSrc={creatorImgSrc} />
        {screeningState === ScreeningState.failed ? (
          <Styled.NftScreeningError>
            <Styled.ScreeningErrorText>
              <IconWarning fill={color.ERROR_2} size={36} />
              <Text variant="BodyTitle2">{STRINGS.screeningErrorMessage}</Text>
            </Styled.ScreeningErrorText>
          </Styled.NftScreeningError>
        ) : (
          <NftImageMemo imgSrc={nftImgSrc} />
        )}
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
        <Styled.TitleRegion>
          <Styled.ItemCount>
            {STRINGS.amount}: {itemCount}
          </Styled.ItemCount>
          {title}
        </Styled.TitleRegion>
        {forSale ? (
          <PriceLabel ethPrice={ethPrice} dollarPrice={dollarPrice} boldEth />
        ) : (
          <PriceLabelWrapper>{STRINGS.notForSale}</PriceLabelWrapper>
        )}
      </Styled.ContentWrapper>
      {screeningState === ScreeningState.pending && (
        <Styled.ModerationProgressLoader>
          <Loader large={false} color={color.SUCCESS_2} />
          <Text reset={true} variant="BodyTitle2" color={color.SUCCESS_2}>
            {STRINGS.screeningInProgressMessage}
          </Text>
        </Styled.ModerationProgressLoader>
      )}
      {(onPreview || onEdit || onDelete) && (
        <ActionButtons
          onPreview={onPreview}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </Styled.PreviewContainer>
  );
}
