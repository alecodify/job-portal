import AddJob from '@/screens/AddJob.vue';
import EditJob from '@/screens/EditJob.vue';
import FourOhFour from '@/screens/FourOhFour.vue';
import Home from '@/screens/Home.vue';
import Job from '@/screens/JobView.vue';
import Jobs from '@/screens/Jobs.vue';
import { createRouter , createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: Job,
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJob,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJob,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: FourOhFour,
        }
    ]
})

export default router;