import {render} from "@testing-library/react"

import Page from "./page"


describe("first teste",()=>{
  it("should render div",()=>{
    const {container} = render(<Page />);
    expect(container.querySelector("div")).toBeInTheDocument()
  })
})
