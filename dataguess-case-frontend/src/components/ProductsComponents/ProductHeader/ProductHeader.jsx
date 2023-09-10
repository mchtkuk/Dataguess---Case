import { BannerContainer} from '../../HomeComponents/HomeBanner/styled'
import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from '../../HomeComponents/HeaderContent/styled'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const ProductHeader = () => {
  return (
    <>
    <Container>
      <div className='d-flex'>
        <Link className="text-secondary" to="/">Home &nbsp;</Link><span className='text-secondary'>&gt;</span> 
        <Link className="text-secondary" to="/Product">&nbsp; Products</Link>
      </div>
    </Container>
    <BannerContainer className="mt-3 py-4">
      <div className='d-flex flex-lg-row w-100 flex-column-reverse justify-content-center align-items-center'>
        <div className='col-md-12'>
          <div className='d-flex text-center flex-column justify-content-center h-100 align-item-center'>
          <TitleOne className='text-white'>Shop</TitleOne>
            <TitleTwo className='text-white'>Is Here!</TitleTwo>
            <div>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <PageButton className="bg-transparent  border text-white">View Intro</PageButton>
              <PageButtonTwo className="bg-primary">Explore Now</PageButtonTwo>
            </div>
          </div>
        </div>
      </div>
    </BannerContainer>
    </>
  )
}

export default ProductHeader