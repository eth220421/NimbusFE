import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import MainPage from '../pages/main/MainPage';
import AgencyPage from '../pages/agency/AgencyPage';
import ProjectPage from '../pages/project/ProjectPage';
import AgencyPopupPage from '../pages/agency/AgencyPopupPage';

export const router = createBrowserRouter([
    {
        path: '/statistics',
        element: <Root />,
        children: [
            {
                path: '',
                element: <MainPage />
            },
            {
                path: 'agency',
                element: <AgencyPage />
            },
            {
                path: 'project',
                element: <ProjectPage />
            },
            {
                path: 'agency/popup',
                element: <AgencyPopupPage />
            }
        ]
    }
])