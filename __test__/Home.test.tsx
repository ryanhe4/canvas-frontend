import {render} from '@testing-library/react';

import Home from '@/app/page';

describe('<Home />', () => {
    it('renders a heading', () => {
        const {container} = render(<Home/>);

        expect(container).toBeDefined()
    });
});
