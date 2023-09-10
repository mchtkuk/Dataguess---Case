import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from '../HeaderContent/styled'
import { BannerContainer,  HomeRectangle1, HomeRectangle2} from './styled'


const HomeBanner = () => {
  return (
    <BannerContainer className='mt-5 p-4'>
      <div className='d-flex z-2 flex-lg-row flex-column-reverse justify-content-center align-items-center'>
        <div className='col-md-6'>
          <h2 style={{color: "white"}}>Dataguess</h2>
        </div>
        <div className='col-md-6'>
          <div className='d-flex text-center flex-column justify-content-center h-100 align-item-center'>
          <TitleOne>Dataguess</TitleOne>
            <TitleTwo>New Future</TitleTwo>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, ut vero error quidem incidunt, quod doloremque ea distinctio cum eius maxime dolorem culpa minus corporis. Corporis illo fugiat voluptates ex.
</p>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <PageButton className="bg-transparent">View Intro</PageButton>
              <PageButtonTwo>Explore Now</PageButtonTwo>
            </div>
          </div>
        </div>
      </div>
      <HomeRectangle1 className='z-1'/>
      <HomeRectangle2 className='z-1'/>
    </BannerContainer>
  )
}

export default HomeBanner