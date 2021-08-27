import { ProductType } from '../../shared/types';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export type ProductModalProps = ModalProps & {
  product: ProductType;
};
