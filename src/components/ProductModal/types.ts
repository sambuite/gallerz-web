import { ProductType } from '../../shared/types';
import { ModalProps } from '../../shared/types/modal';

export type ProductModalProps = ModalProps & {
  product: ProductType;
};
