import { useTheme } from "styled-components";
import IconInfo from "../Icons/IconInfo";
import IconWarning from "../Icons/IconWarning";
import { Text } from "../Text";
import { NotificationProps, NotificationVariant } from "./index.interface";
import * as Styled from "./index.styled";

export function Notification({
  heading,
  items,
  variant = NotificationVariant.Success,
}: NotificationProps) {
  const { color } = useTheme();
  const ICON_SIZE = 40;
  const renderIcon =
    variant === NotificationVariant.Error ? (
      <IconWarning size={ICON_SIZE} fill={color.BLACK} />
    ) : (
      <IconInfo size={ICON_SIZE} fill={color.BLACK} />
    );

  return (
    <div>
      <Styled.Notification variant={variant} role="alert">
        <Styled.NotificationContainer>
          <Styled.NotificationIcon>{renderIcon}</Styled.NotificationIcon>
          {heading && (
            <Text
              text={heading}
              variant="BodyTitle2"
              color={color.BLACK}
              reset
            />
          )}
        </Styled.NotificationContainer>
        {items?.length && (
          <Styled.NotificationList>
            {items?.map((item, index) => (
              <Text
                key={index}
                text={item}
                variant="Body3"
                as="li"
                color={color.BLACK}
                reset
              />
            ))}
          </Styled.NotificationList>
        )}
      </Styled.Notification>
    </div>
  );
}

export * from "./index.interface";
export default Notification;
