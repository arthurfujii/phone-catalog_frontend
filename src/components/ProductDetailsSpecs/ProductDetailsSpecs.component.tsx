import { useContext } from 'react';
import { StatesContext } from '../../store/GlobalStateProvider';
import { Line } from '../base/Line/Line.component';

export const ProductDetailsSpecs = () => {
  const { selectedProduct } = useContext(StatesContext);

  if (selectedProduct) {
    return (
      <div className="productDetailsSpecs">
        <div className="productDetailsSpecs__title">
          <h3>Tech specs</h3>
          <Line />
        </div>
        <div className="productDetailsSpecs__specs">
          <div className="productDetailsSpecs__line">
            <div className="productDetailsSpecs__key">Screen</div>
            <div className="productDetailsSpecs__value">
              {selectedProduct.specs.screen}
            </div>
          </div>
          <div className="productDetailsSpecs__line">
            <div className="productDetailsSpecs__key">Resolution</div>
            <div className="productDetailsSpecs__value">
              {selectedProduct.specs.resolution}
            </div>
          </div>
          <div className="productDetailsSpecs__line">
            <div className="productDetailsSpecs__key">Processor</div>
            <div className="productDetailsSpecs__value">
              {selectedProduct.specs.processor}
            </div>
          </div>
          <div className="productDetailsSpecs__line">
            <div className="productDetailsSpecs__key">RAM</div>
            <div className="productDetailsSpecs__value">
              {selectedProduct.specs.ram}
            </div>
          </div>
          {selectedProduct.categoryId !== 'accessories' && (
            <>
              <div className="productDetailsSpecs__line">
                <div className="productDetailsSpecs__key">Camera</div>
                <div className="productDetailsSpecs__value">
                  {selectedProduct.specs.camera}
                </div>
              </div>
              <div className="productDetailsSpecs__line">
                <div className="productDetailsSpecs__key">Zoom</div>
                <div className="productDetailsSpecs__value">
                  {selectedProduct.specs.zoom}
                </div>
              </div>
            </>
          )}
          <div className="productDetailsSpecs__line">
            <div className="productDetailsSpecs__key">Cell</div>
            <div className="productDetailsSpecs__value">
              {selectedProduct.specs.cell.join(', ')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return 'something wrong';
};
