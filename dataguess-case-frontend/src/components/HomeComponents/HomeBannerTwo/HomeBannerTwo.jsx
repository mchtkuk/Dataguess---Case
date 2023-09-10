import { PageButton, PageButtonTwo, TitleOne, TitleTwo } from "../HeaderContent/styled"
import { BannerContainerTwo, HomeRectangle3, HomeRectangle4 } from "./styled"


const HomeBannerTwo = () => {
  return (
    <BannerContainerTwo  className='mt-5'>
    <div className='d-none d-xl-flex z-2 flex-lg-row-reverse justify-content-center align-items-center p-4'>
      <div className='col-md-12'>
        <div className='d-flex text-center flex-column justify-content-center h-100 align-item-center'>
        <TitleOne>Dataguess</TitleOne>
          <TitleTwo>AI </TitleTwo>
          <div>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptatum!

</p>
          </div>
          <div className="d-flex gap-3 justify-content-center flex-row-reverse">
            <PageButton >View Intro</PageButton>
            <PageButtonTwo >Explore Now</PageButtonTwo>
          </div>
        </div>
      </div>
    </div>
    <HomeRectangle3 className="z-1" />
    <HomeRectangle4 className="z-1" />
  </BannerContainerTwo>
  )
}

export default HomeBannerTwo