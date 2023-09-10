import {  HomeUpContainer, PageButton, PageButtonTwo, TitleOne, TitleTwo } from "./styled"

const HeaderContent = () => {
  return (
      <HomeUpContainer>
        <div className="d-flex justify-content-center align-items-center flex-md-row flex-column">
          <div className="d-flex flex-column col-lg-12 float-md-start align-items-center">
            <TitleOne>Dataguess</TitleOne>
            <TitleTwo>Merch Has Arrived</TitleTwo>
            <div>
              <p>Check Our Latest Products.
</p>
            </div>
            <div className="d-flex gap-3">
              <PageButton>View Intro</PageButton>
              <PageButtonTwo>Explore Now</PageButtonTwo>
            </div>
          </div>
     
        </div>
      </HomeUpContainer>
  )
}

export default HeaderContent