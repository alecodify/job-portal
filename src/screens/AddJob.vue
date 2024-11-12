<script setup>
    import router from '@/router';
    import { reactive } from 'vue';
    import { useToast } from 'vue-toastification';
    import Input from '@/components/Input.vue';
    import TextArea from '@/components/TextArea.vue';
    import SelectInput from '@/components/SelectInput.vue';
    import axios from 'axios';

    const port = import.meta.env.VITE_PORT;

    const form = reactive({
    type: 'Full-Time',
    title: '',
    description: '',
    salary: '',
    location: '',
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: '',
    },
    });

    const toast = useToast();

    const handleSubmit = async () => {
    const newJob = {
        title: form.title,
        type: form.type,
        location: form.location,
        description: form.description,
        salary: form.salary,
        company: {
        name: form.company.name,
        description: form.company.description,
        contactEmail: form.company.contactEmail,
        contactPhone: form.company.contactPhone,
        },
    };

    try {
        const response = await axios.post(`${port}/api/jobs`, newJob);
        if (response.data) {
            toast.success('Job Added Successfully');        
            router.push(`/jobs/${response.data._id}`);
        }
    } catch (error) {
        console.error('Error fetching job', error);
        toast.error('Job Was Not Added');
    }
};
</script>

<template>
    <section class="bg-blue-50">
        <div class="container m-auto max-w-2xl py-24">
          <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
           
            <form @submit.prevent="handleSubmit">
              <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>
    
              <SelectInput v-model="form.type" id="type" label="Job Type" name="type" :options="['Full-Time', 'Part-Time', 'Remote', 'Internship']" />

              <Input v-model="form.title" id="title" name="title" label="Job Listing Name" placeholder="eg. Beautiful Apartment In Miami" required />
              
              <TextArea v-model="form.description" id="description" name="description" label="Description" placeholder="Add any job duties, expectations, requirements, etc" />
                            
              <SelectInput v-model="form.salary" id="salary" name="salary" label="Salary"
              :options="['Under $50K', '$50K - $60K', '$60K - $70K', '$70K - $80K', '$80K - $90K', '$90K - $100K', '$100K - $125K', '$125K - $150K', '$150K - $175K', '$175K - $200K', 'Over $200K']"
              />

              <Input v-model="form.location" id="location" name="location" label="Location" placeholder="Company Location" required />
              
              <h3 class="text-2xl mb-5">Company Info</h3>

              <Input v-model="form.company.name" id="company" name="company" label="Company Name" placeholder="Company Name" required />
  
              <TextArea v-model="form.company.description" id="company_description" name="company_description" label="Company Description" placeholder="What does your company do?" />

              <Input v-model="form.company.contactEmail" id="contact_email" name="contact_email" label="Contact Email" placeholder="Email address for applicants" required />

              <Input v-model="form.company.contactPhone" id="contact_phone" name="contact_phone" label="Contact Phone" placeholder="Optional phone for applicants" required />
    
              <div>
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"  type="submit" > Add Job</button>
              </div>
            </form>
          </div>
        </div>
      </section>
</template>