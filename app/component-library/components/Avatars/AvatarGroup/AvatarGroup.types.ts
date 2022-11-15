// Third party dependencies.
import { ImageSourcePropType, ViewProps } from 'react-native';

/**
 * Token structure used in AvatarGroup.
 */
export interface AvatarGroupToken {
  /**
   * Token id.
   */
  id: string;
  /**
   * Token Name.
   */
  name: string;
  /**
   * Token image from either remote or local source.
   */
  imageSource: ImageSourcePropType;
}

export type AvatarGroupTokenList = AvatarGroupToken[];

/**
 * AvatarGroup component props.
 */
export interface AvatarGroupProps extends ViewProps {
  /**
   * A list of Avatars to be horizontally stacked.
   */
  tokenList: AvatarGroupTokenList;
}
