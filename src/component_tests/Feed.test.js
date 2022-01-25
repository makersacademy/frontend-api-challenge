import { render, screen, waitFor } from "@testing-library/react";
import Feed from '../components/Feed'

describe('Feed', () => {

  test('fetches and displays peeps', async () => {
    render(<Feed />)
    expect(await screen.findByText("let us peep! :)")).toBeInTheDocument()
  })

})
