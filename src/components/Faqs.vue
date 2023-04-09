<script>
import FAQ from './Faq.vue';

const DATA = [
  {
    question: 'Will I lose my followers when I stop using Follow Agency?',
    answer:
      'No, you will not. The followers you receive are real, active users interested in your profile, but it’s up to you to keep track of the followers (specifically, depending on the quality and type of content you add).\nCancelling Follow Agency will not result in losing them.',
  },
  {
    question: 'Why should I invest in this service?',
    answer:
      'This number will vary because each account is different.\nWe cannot guarantee a specific number of new followers because the people addressed are real people who have to decide for themselves whether or not to follow you.\nTheir interest in your profile will depend directly on the quality of your posts.',
  },
  {
    question: 'How many followers per month can I get with Follow Agency?',
    answer:
      'This number will vary because each account is different.\nWe cannot guarantee a specific number of new followers because the people addressed are real people who have to decide for themselves whether or not to follow you.\nTheir interest in your profile will depend directly on the quality of your posts.',
  },
  {
    question: 'Are the followers that I get real?',
    answer:
      'We do not offer fake likes. The growth you get will be organic. We only provide our clients with real, active fans.',
  },
  {
    question: 'How does Follow Agency work?',
    answer:
      'After you place your order, you send us a list of Instagram accounts that have the followers you want to get. These should be profiles similar to yours (possibly competitors), hashtags, and sites.\nAfter that, we’ll start an activity from your account as ”liking” posts or users who follow the accounts you provided.\nThese users will be notified that you like their photos or that you have begun following them and come to see your Instagram. Because we target similar accounts to yours, they are more likely to like your brand and want to follow you.\nWe perform approximately 6,000 actions per month, which helps increase the overall organic reach on your site.',
  },
  {
    question: 'Do you need a login to my Instagram account?',
    answer:
      'Yes, we need the login information to connect your Instagram account to our system.',
  },
  {
    question: 'Can I use my account while using Follow Agency?',
    answer:
      'Yes, you can use the account. While using the Service, it is prohibited to engage in activities such as liking, following and unfollowing users.\nIf you do, the promotion may be paused.',
  },
  {
    question: 'When will I see the first result?',
    answer:
      'Give us 24 hours to set up your account, then we’ll increase the intensity of visitors of your site.\nThe first 7 days are the ” warm-up phase ” at which the number of actions performed is minimal and gradually increases.\nWe provide an organic service that uses interactions to attract people to your Instagram account. For this reason, engagement tends to come gradually.\nPlease don’t be discouraged! To compensate for the warm-up phase, your promotion will be extended by 7 days at the end of the promotion period.',
  },
];

export default {
  props: ['showNumber'],
  data() {
    return { faqs: this.showNumber ? DATA.slice(0, this.showNumber) : DATA };
  },
  components: { FAQ },
};
</script>
<template>
  <div
    class="container mx-auto bg-white border-grey-light justify-items-center items-center mt-16 mb-28"
  >
    <h1 class="text-7xl text-center text-[#051942] mb-14 font-bold">
      Frequently Asked Questions
    </h1>
    <ul class="flex gap-5 flex-col items-center w-full border-l-indigo-100">
      <li
        v-for="faq in faqs"
        class="w-full items-center justify-center max-w-3xl"
      >
        <FAQ :question="faq.question" :answer="faq.answer" />
      </li>
    </ul>
  </div>
</template>
