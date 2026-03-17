export interface BlogPostData {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    categories?: string[];
    author: string;
    date: string;
    content: string;
  }
  
  export const blogPostsData: BlogPostData[] = [
    {
      id: '1',
      slug: 'not-technical-enough',
      title: '"Not Technical Enough"',
      excerpt: "Women often receive the feedback they're not technical enough during interviews, performance evaluations and promotions. Let's dig in to why we receive this feedback, whether...",
      category: 'Career Growth',
      author: 'mgleeson',
      date: 'May 21, 2024',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Women often receive the feedback they're not technical enough during interviews, performance evaluations and promotion processes.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Let's dig in to why we receive this feedback, whether it's even true, and what we can do about it.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          I personally have been passed over for an interview for being not hands-on enough at a time I was coding daily. Assumptions were made, despite the detail in my resume. This feedback is subjective, dismissive and lazy. My experience is not unique: we hear this time and time again from our Tech Leading Ladies members, as they apply for new roles.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Wanting to understand more, I asked a CTO Group that I'm a member of if any of them had ever heard that they were not technical enough. I was the only one who had ever received this feedback – and I was the only woman. Some of those men have not coded in over 20 years and yet they had never been considered "not technical enough". It is assumed they are technical enough simply by already being in a similar position, and they never have to prove it. Yet, when women are applying for CTO and VP of Eng roles, suddenly daily hands on coding is a requirement.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Why do we get this feedback?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          This all stems from – you guessed it – unconscious bias. Men usually believe that women are less technical and then they find evidence to back up their theory. We now know this is called Confirmation Bias.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-4">
          One thing that really doesn't help us is the fact we spend so much time and energy working on non-technical contributions. Even though women are contributing technically, they often find themselves disproportionately responsible for non-technical tasks as well, like:
        </p>
  
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Taking meeting notes</li>
          <li>Writing documentation</li>
          <li>Onboarding new hires</li>
          <li>Organising team lunches</li>
          <li>Doing most of the interviewing</li>
          <li>Managing the backlog</li>
          <li>Facilitating retrospectives</li>
          <li>Engaging in diversity initiatives</li>
        </ul>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          This unbalanced responsibility is an issue. First, because it means your male peers are – on average – paid more while doing less, and second, because it confirms their bias as you are being very visible doing all the non-technical stuff.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          When we are working on technical contributions, it makes men feel uncomfortable because we are violating an innate belief they have about our place in the team and the workforce. We are violating their value system. So they find fault with what we do. They hold us to higher standards and don't let things slide like they would with our male peers. They push us into less-technical roles because that makes them feel more comfortable.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          When we do the glue work, that makes them feel comfortable. We are not violating their value system so they praise these efforts, tell us we are so good at the people stuff.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          We get criticized for our technical contributions and praised for our glue work, so what does that teach us? We are "not technical enough". When you hear it enough, you start to believe it, and it soon becomes a self-fulfilling prophecy.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Breaking the Cycle</h2>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Advice that I wish I'd heard early in my career and we often give to people of the TLL community is not to do glue work in at least the first three to four years of your career. Focus on building your technical skills and do the glue work and the diversity work when you move into leadership positions. Remember, you getting promoted is diversity work. At most, do the least amount of this stuff in your team, because you are already spending energy overcoming people's biases.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 1: Stop doing the glue work</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Action number one for overcoming this bias was to stop doing the glue work. Let's strike that off and get known for our technical contributions.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 2: Define "technical"</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          The next action is to demonstrate how technical we really are. At Tech Leading Ladies, we run a career growth program where participants get to baseline their skills against an industry benchmark to see where their strengths are and where their gaps are, against technical work and glue work.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          During the course of this program, one of our participants was given the "not technical enough" feedback by her boss. She asked him to explain what "not technical enough" meant and he couldn't articulate it. It's just a vibe, you "just know". Our participants took the Skills Report that we had compiled to her boss and, using the underlying career growth framework as a frame of reference, was able to have a better career conversation. Digging into what "not technical enough" meant for him, it turns out she was in this not-technical-enough bucket as she did not know what all the letters meant in the acronym SOLID. (Seriously, besides 'Single responsibility', nobody cares, dude!)
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Our male peers hold onto the idea that these concepts are important because it validates how technical they feel they are. It's less about you being not technical enough and more about their fear of not being relevant.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          So next time you hear the feedback that you're "not technical enough", dig in and find out why. What assumptions lie behind the assertion. What sense of "technical" are you violating for them?
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 3: Fill the perceived gap – very visibly</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Once you uncover their true concerns you simply have to work to fill the gap. Do so visibly, checking in with them often, letting them know your progress and asking them for opportunities to fill that gap.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          If the goalposts keep moving, and you do all this and next review time you have done all this but he still doesn't see you as technical, it's a him problem, not a you problem. You could stay in that job and bang your head against a wall for the next few years, or you can find an employer who will appreciate the value you bring.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">You already are technical enough 💜</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          I'd like your one take away from this to be that you already are technical enough. The notion of being "technical enough" should be seen for what it often is: a gatekeeping mechanism akin to the outdated concept of "merit" which was historically used to exclude women from certain roles and opportunities.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          There will always be an excuse for why you don't quite meet the grade – even when your performance is actually exceeding it. It's up to you to manage your own career. Find your Women in Tech tribe and start putting objective measurements behind your performance. Hopefully, it can help you overcome the systemic bias holding back women in our industry.
        </p>
      `
    },
    {
      id: '2',
      slug: 'building-robust-ai-products',
      title: 'Meetup Summary - Building Robust AI Products',
      excerpt: "Welcome back! 👋 We're excited to be kicking off Tech Leading Ladies in 2024 with some amazing speakers and your favourite programs lined up for...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'March 4, 2024',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome back! 👋 We're excited to be kicking off Tech Leading Ladies in 2024 with some amazing speakers and your favourite programs lined up for the year. Our first event was last week, and it was so great to have everyone able to join and share in the experience. In case you missed it, here's a quick run down of the meetup, and we look forward to seeing you at the next one!
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          At Tech Leading Ladies February Meetup, we had the privilege of hearing AI visionary Kendra Vant speak with us about some foundational skills needed for building great AI products. We kicked off the event with a lightning talk from our very own community member Hima Tk about RAG and how this will be the next hot topic.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Key takeaways from Hima's talk on Retrieval Augmented Generation (RAG):</h2>
  
        <ol class="list-decimal pl-6 mb-8 space-y-4 text-gray-700">
          <li>
            <strong>RAG Revolutionizes LLMs with External Knowledge:</strong> RAG represents a significant advancement in AI frameworks by integrating Large Language Models (LLMs) with external knowledge bases. This integration allows LLMs to supplement their internal information with factual data, leading to more informed and accurate responses.
          </li>
          <li>
            <strong>Two-Phased Approach:</strong> RAG operates through a two-phased approach: retrieval and content generation. In the retrieval phase, a Smart Retriever component searches the knowledge base for relevant content. This content is then used by an LLM generator to generate answers to queries, ensuring that responses are grounded in factual context.
          </li>
          <li>
            <strong>Trulens Framework for Evaluation:</strong> To assess the effectiveness of RAG models, the Trulens framework defines three key metrics: Context Relevance, Groundedness, and QA Relevance. These metrics help track the success of RAG results by evaluating the relevance of retrieved context to queries, the support of responses by context, and the overall relevance of answers to queries.
          </li>
        </ol>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Why AI needs to be built on robust data foundations</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          A visionary product & tech exec, Kendra Vant has 16 years of commercial experience (Xero, SEEK, Telstra, Deloitte, Commonwealth Bank) and eight years of R&D experience (MIT, Los Alamos National Laboratory), driving development of products that change people's lives for the better.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          In today's tech landscape, the rush to integrate AI into various aspects of our lives has led to unforeseen challenges and failures, highlighting the critical need for robust data foundations.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Some final suggestions from Kendra about how we can be better AI stewards:</h2>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Round out your own gaps.</h3>
  
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Continuously strive to identify and address personal knowledge gaps</li>
          <li>Foster curiosity and recognizing when to seek guidance from others</li>
          <li>Embrace vulnerability and acknowledge areas of uncertainty</li>
        </ul>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          To sum it all up, by prioritising understanding, continuous learning, and collaboration, we can build a more inclusive and innovative future for AI technology. 🚀
        </p>
      `
    },
    {
      id: '3',
      slug: 'startin-something',
      title: "Meetup Summary - Startin' Something",
      excerpt: "(Cue music: 🎶 I said you wanna be startin' something, you got to be startin' something 🎶) The Tech Leading Ladies October meetup featured Lucy...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'November 13, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
          (Cue music: 🎶 I said you wanna be startin' something, you got to be startin' something 🎶)
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          The Tech Leading Ladies October meetup featured Lucy Lloyd. During her career Lucy has managed the development of hundreds of digital campaigns, websites, apps and SaaS products and is currently the co-founder and CEO of Mentorloop.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Lucy is a great storyteller and gave us a fascinating behind-the-scenes look at her journey growing a software "side project" into a thriving business, along with many valuable tips for those of us who might be looking to start or scale up our own side hustle or business.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">What is Mentorloop?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          There's a popular idea of mentoring and it revolves around the "chosen one" - meaning that mentoring relationships are exclusive, behind closed doors and available only for a special few. The problem with this philosophy is that it favours people who already have access to great networks and opportunities, reinforcing the same people moving into positions of power and leadership.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Customer Discovery</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          The initial vision for Mentorloop was a bit like a dating site to match mentors and mentees, and the first people that Lucy and Heidi spoke to thought that was a good idea. However, when they started customer discovery and spoke to people already running mentoring programs at a large scale – universities, industry bodies, HR departments at corporates – they realised that the real problems were not with the mentor-mentee relationships but with the administration of the mentoring programs.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6 font-semibold">
          🎶 I said you wanna be startin' something, you got to be startin' something 🎶
        </p>
      `
    },
    {
      id: '4',
      slug: 'write-standout-resume',
      title: 'Meetup Summary - Write a Stand-out Resume',
      excerpt: "In the current environment many of us have found ourselves looking for a new role, so in September's meetup we were delighted to have Pauline...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'September 20, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In the current environment many of us have found ourselves looking for a new role, so in September's meetup we were delighted to have Pauline and Natasha from My Career Angels take us through the process of writing an effective resume that increases the chances of getting an interview.
        </p>
  
        <div class="bg-purple-50 border-l-4 border-purple-600 p-6 my-8">
          <p class="text-gray-900 font-semibold text-xl mb-2">
            It is no longer enough just to submit an application. With hundreds of people competing for the same role, you need to skip the queue and stand out.
          </p>
        </div>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Selection Criteria</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Read each job ad thoroughly – the selection criteria can be scattered throughout the ad. Don't just go to a section headed "Main Responsibilities", you will miss things. To get to the next stage of the process you need to represent the key words from the job ad in your resume, using the same terminology/phrases that have been used in the ad.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The First ⅓</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          If the first third of the first page of your resume does not hit the mark, the hiring manager won't read on. You should include your name, phone number, email, LinkedIn, Title, Suburb, Career Objective, and the MOST relevant information that matches the selection criteria.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Final Tips</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Be confident! You're there to sell yourself, so an appropriate amount of bragging is OK! Make sure you highlight your achievements. Show your key strengths, be positive and self-assured.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6 font-semibold text-xl">
          And good luck on your job search!
        </p>
      `
    },
    {
      id: '5',
      slug: 'strategic-decisions-career-transitions',
      title: 'Meetup Summary - The road to here: strategic decisions and career transitions',
      excerpt: "Our June meetup was special: we turned 5! From a small internal coaching group to a 500+ strong community today, we've come a long way...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'July 31, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our June meetup was special: we turned 5! From a small internal coaching group to a 500+ strong community today, we've come a long way since we first started.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          We couldn't imagine a better way to celebrate and reflect on this milestone than to hear from the legendary Hannah Browne, an incredible, award-winning tech leader and long time supporter of Tech Leading Ladies.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The pillars of creation: skills, resources, experiences, network, allies and confidence</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Hannah shared the unconventional origin story of her career over the past 25 years, encouraging us to think strategically in the long-term rather than making short-term, tactical decisions about our careers and where we want to go next.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The unexpected benefits of getting fired</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          With the wave of tech layoffs continuing to wash over the industry, Hannah shared her own experiences of getting fired, and the unexpected benefits she learned in each instance.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">The road to here</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Hearing Hannah's journey from stacking shelves at Bi-Lo to winner of the 2023 WIICTA Entrepreneur Award is exactly why Tech Leading Ladies exists: to connect, learn and inspire its members with the incredible achievements of women in tech!
        </p>
      `
    },
    {
      id: '6',
      slug: 'stakeholder-engagement-management',
      title: 'Meetup Summary – Stakeholder Engagement & Management',
      excerpt: "At our August Tech Leading Ladies event, we were privileged to host the exceptional Kim Spillman, General Manager from Midnyte City who delved into 'Stakeholder Engagement & Management'...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'August 23, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          At our August Tech Leading Ladies event, we were privileged to host the exceptional Kim Spillman, General Manager from Midnyte City who delved into 'Stakeholder Engagement & Management'. This topic is an essential part of technical leadership and growing this skill is a crucial step towards empowering our community in technical leadership roles.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          In this talk, Kim explored the following key aspects of Stakeholder Engagement and Management:
        </p>
  
        <ul class="list-disc pl-6 mb-8 space-y-4 text-gray-700">
          <li>
            <strong>Identifying Stakeholders:</strong> We looked at the benefits of stakeholder mapping, and how this impacts our communication, decision making and strategic direction.
          </li>
          <li>
            <strong>Building Trust with Stakeholders:</strong> Once we know who our stakeholders are, how do we build trust and ensure we meet mutual expectations?
          </li>
          <li>
            <strong>Communication:</strong> Kim shared applicable tips and tricks from the trenches, and ways we can improve both written and verbal communication with stakeholders.
          </li>
          <li>
            <strong>Dealing with Difficult Stakeholders:</strong> While not something we want to experience – we need to be prepared for this. Kim shared methods for dealing with difficult situations and getting back to a position of trust.
          </li>
        </ul>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          By the end of the session, everyone had a thorough understanding of how to achieve success with stakeholders.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          For a more in-depth exploration of this integral topic, I highly recommend diving into Kim's enlightening blog post titled 'Stakeholder Mapping - the key to effective decision making'.
        </p>
      `
    },
    {
      id: '7',
      slug: 'power-and-importance-of-coaching',
      title: 'Meetup Summary - The Power and Importance of Coaching',
      excerpt: "Hello to our wonderful community of Tech Leading Ladies! In our July meetup we dove into a topic that's becoming increasingly significant in the world of leadership: coaching...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'August 2, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Hello to our wonderful community of Tech Leading Ladies! In our July meetup we dove into a topic that's becoming increasingly significant in the world of leadership: coaching. Here's a summary of the insights and key takeaways from our session.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">What is Coaching?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Every single one of us, irrespective of our accomplishments, can benefit from a little guidance now and then. Think about it: even the world's best athletes have coaches. Why? Because the power lies in observation. A coach offers an invaluable external perspective, allowing you to observe yourself from a different lens and carve a distinctive path forward.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Interestingly, coaching differs from mentoring. When you think of a mentor, think of someone who has 'been there, done that' – someone who shares experiences and tactics that have worked for them. However, a coach doesn't necessarily need to have achieved what you aspire to. A classic example? Usain Bolt's coach has never won a gold medal, yet his expertise has been instrumental in moulding one of the world's fastest sprinters.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          As leaders in tech, we need to embrace both roles. At different junctures, we will find ourselves wearing the hat of a mentor or that of a coach. Remember the book, "Trillion Dollar Coach"? It shed light on how major tech leaders had coaches guiding them through their journeys.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Why is Developing Coaching Skills Essential?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          With the technological landscape evolving at a breathtaking pace, the rate of change is not just accelerating – it's increasing exponentially. This relentless shift can lead to burnout and feelings of overwhelm. And if we glance at the Environmental, Social, and Governance (ESG) metrics, it's clear that we're lagging in effecting the change that matters. Now, more than ever, there's a collective need to grow and tackle the world's most pressing challenges. Here's where coaching steps in: it's a tool that catalyses enduring behavioural change.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">The Three Cornerstones of Effective Coaching</h3>
  
        <ol class="list-decimal pl-6 mb-8 space-y-4 text-gray-700">
          <li>
            <strong>Active Listening:</strong> It's a challenge in today's digital age, where attention spans are dwindling. But to be an effective coach, one must be wholly present. It's crucial to pick up on non-verbal cues, especially in a world moving towards remote work. Cultivate curiosity. When you listen, it shouldn't be about jumping in with a solution or judgement. Instead, it's about understanding. A handy tool? Paraphrase what the other person is saying and reflect it back.
          </li>
          <li>
            <strong>Socratic Questioning:</strong> Instead of directing a conversation towards a pre-set conclusion, ask open-ended questions. Ever heard of the "5 Whys" technique? It's an approach that fosters self-agency in the person you're coaching.
          </li>
          <li>
            <strong>Empathy:</strong> Its power is often understated. Empathy isn't just about "feeling sympathy", it's about seeing a situation from another's viewpoint and understanding their emotions. And yes, it's entirely possible to be empathetic and objective simultaneously.
          </li>
        </ol>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          As we wrap up, let's remind ourselves that in the dynamic world of tech, the ability to coach and be coached is no longer a luxury – it's a necessity. It's about elevating not just ourselves, but those around us.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Until our next meetup, keep leading, learning, and inspiring! 🌟
        </p>
      `
    },
    {
      id: '8',
      slug: 'tll-2023-kick-off',
      title: 'Tech Leading Ladies 2023 Kick Off 🎉 — Event Summary',
      excerpt: "We had our first meetup of the year on Thursday, February 23 — the Tech Leading Ladies 2023 Kick Off. We are excited to be back in 2023, and wanted to share with you the important information we covered...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'February 27, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          We had our first meetup of the year on Thursday, February 23 — the Tech Leading Ladies 2023 Kick Off 🎉. We are excited to be back in 2023, and wanted to share with you the important information we covered during our online Zoom event.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-4">What did we cover?</p>
  
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Mentoring program</li>
          <li>Leadership training program</li>
          <li>Community</li>
          <li>Meetups</li>
          <li>Important dates</li>
        </ul>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">What's on for members in 2023?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Thanks to our generous sponsors, and amazing Tech Leading Ladies (TLL) community, we're proud to be able to provide free mentoring and training services to our members this year.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Mentoring Program</h3>
  
        <p class="text-gray-700 leading-relaxed mb-4">
          TLL has an official mentoring program available to all members. We use the Mentorloop platform that facilitates mentor introductions, as well as helping support members by providing resources on how to be an effective mentor/mentee.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Our mentoring program coordinator is the amazing Tracy Powell (who also happens to be the Head of Engineering at Mentorloop!)
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Get involved in the Mentoring program</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Ask for an invite link to the platform by joining the #program-mentoring channel in Slack, or sending a message to Tracy Powell. If you're not yet on our Slack, you can also register your interest via our Mentoring Expression Of Interest Form.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Leadership Training Program</h3>
  
        <p class="text-gray-700 leading-relaxed mb-4">
          Blackmill has teamed up with TLL to provide leadership training to our members. The training program coordinator is Elle Meredith (co-founder of Blackmill) and long time member and supporter of Tech Leading Ladies.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-4">This year, we're pleased to offer scholarships to the following Blackmill training courses:</p>
  
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Leading Engineering Teams Workshop (dates provided in Important Dates)</li>
          <li>Community of Practice</li>
          <li>Leadership 201 Workshop – a bit more advanced (depending on interest)</li>
        </ul>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Get involved in the Leadership Training program</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Please register your interest using the Leadership Training waitlist form. Join the #program-leadership-training channel in Slack, or send a message to Elle Meredith on Slack.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Community</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Learn more about our Slack community. You can request to join our Slack community via our Contact Us page.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Meetups</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          In 2023, we'll be alternating between evening hybrid meetups (in-person / online). Please request to join TLL on Meetup to ensure you receive updates.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Important dates</h2>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Meetups (Thursdays, subject to change)</h3>
  
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>March 23</li>
          <li>April 27</li>
          <li>May 18</li>
          <li>June 21</li>
          <li>July 20</li>
          <li>August 17</li>
          <li>September 14</li>
          <li>October 19</li>
          <li>November 23</li>
        </ul>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Leadership Training (Mon – Wed)</h3>
  
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>March 6-9</li>
          <li>May 22-25</li>
          <li>August 28-31</li>
          <li>November 27-30</li>
        </ul>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Mentoring</h3>
  
        <ul class="list-disc pl-6 mb-4 space-y-2 text-gray-700">
          <li>Fri, March 3 – auto-match date</li>
        </ul>
      `
    },
    {
      id: '9',
      slug: 'spotting-a-toxic-culture-in-tech',
      title: 'Spotting a toxic culture in tech',
      excerpt: "As software engineers in the current market we find ourselves in hot demand. Add to that women are an underrepresented, sought-after group and you are in a position to shop around for the best role...",
      category: 'Hiring',
      categories: ['Hiring', 'Interviewing'],
      author: 'mgleeson',
      date: 'December 15, 2021',
      content: `
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-4">Be on the lookout in your next interview</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          As software engineers in the current market we find ourselves in hot demand and with the ability to build personal wealth, as large tech companies are now throwing cash at the skills shortage problem. Add to that women are an underrepresented, sought-after group and you are in a position to shop around for the best role, name your price and your working conditions.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Not only is it important to find a values-aligned company, but you need to find one you can thrive in, and this is the hard bit. Despite our best efforts, tech is still heavily dominated by men, which can create an environment that holds women back, or spits them out all together.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          I have had a number of coaching conversations with women lately, wanting to know how to assess whether the company they are interviewing for will be inclusive and support their career growth. When you are interviewing for your next role, here are some ways to identify red flags, and assess whether it's a culture you want to be part of.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">How many women have interviewed you?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          An engineer hired into one of my teams remarked to me how great it was to have women interview her at each stage of the process, and how this made more confident about joining our company. Despite her belief that this was a happy accident, I can assure you it was a very deliberate move. Having been involved in many a masculine-interview processes I know how important a sense of belonging is to me making a final decision about my next gig.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          The first red flag is getting to interview number two and still not having spoken to a woman (apart from the recruiter). When I find myself in this situation I seek to find out what's really going on behind the polished-recruiting facade.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Ask if you can be interviewed by one of their female developers (as senior and as tenured as possible)</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          During this interview ask her about her growth in the company and the career progression opportunities she has experienced. As a software dev manager, it is my practice that anyone who has been in an engineering team for 6 months or more should very clearly know how far away they are from promotion, what they need to learn and do to get there, and how the company is supporting them in that. If your interviewer is vague on these details, think very carefully about joining her.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Be careful to note that "having a mentor" and "getting promoted" are two very different things. The first means one person cares about her development, which is a start. The second means the company has reduced subjective assessment for promotions or unconscious bias is not holding her back: necessary for you to be able to grow in that role and be your authentic self.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          <strong>Side note for male engineer leaders:</strong> If you have read this and now think "so all I need to do is make the one female dev we have do all the interviews!" you have missed the point. The tl;dr is No, and if you don't know why then watch this talk by <a href="https://www.youtube.com/watch?v=KClAPipnKqw" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:text-purple-700">Tanya Reilly on Being Glue</a>.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">What if they don't have a female developer?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Even in this day and age, sadly this is not an uncommon scenario, and paints a very clear story on the value they place on diversity. Due to my experience, I know that a diverse team will outperform a pack of brogrammers every time so the excuse of "we just had to move fast" is a false-economy of unaware tech managers. If the company isn't a small start up, well, they are even further from this being an excuse.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          It's important to know that it's very rarely bad intent. On some level people kind of think they should have more women in the team because it's "the right thing to do": not because they implicitly understand what diversity can bring. And, because this is about you and not them, despite their good intentions, you want to go somewhere that deeply understands this and will give you an environment to thrive in.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Ask them what they are doing to level the gender imbalance in their engineering teams</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          This question usually gets responses that range from a awkward spluttering excuse about why either they have not thought about it or they don't need to, through to an articulate response of how they understand the importance, and have done all they could before they launch into mansplaining to you how there are just no qualified women in tech (please!).
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          In my various engineering leader roles, I have put a lot of energy into deliberately building out diverse tech teams, and have still – at times – experienced the same gender imbalance in my own teams, so I understand how hard it is. (Well, it's never been zero, but has dipped as low as 10% in engineering). The difference is, anyone interviewing for my teams knows exactly what we are doing at the time to hire and retain women in the tech space.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Use your intuition to tell you if the answer you get is good enough, and something you are comfortable living with.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">They seem like okay guys though</h2>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Great! You have an offer in hand, you feel like they are values aligned, and have deemed you skilled enough. You haven't picked up on any red flags (besides the no women thing). You need to work out if you can thrive in that environment as a software engineer. Do you want to be the trailblazer for women in that company? Do you want to be the one to call out the micro-aggressions you experience, the non-inclusive language they use, the flaws in their hiring and promotion processes? Do you want to be the one having to 'fix diversity' or would you rather spend your time and energy building your tech skills? The answer might be yes, and if you have established yourself in your career, and have the support of a great network like Tech Leading Ladies, you may want to take this on.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">How do I find a role like that?</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Use your network! Lots of Women in Tech groups have job boards, with roles that <em>come endorsed</em> by other members. Ask your friends and ex-colleagues if they are hiring.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Ultimately, trust your gut. If something feels wrong, reach out to a trusted mentor or friend and talk it through. So many women in tech end up stuck in jobs without growth opportunities, dealing with micro-aggressions and having to navigate the impacts of unconscious bias, before leaving tech all together.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Your ability to succeed starts with the right employer.
        </p>
      `
    },
    {
      id: '10',
      slug: 'navigating-redundancy',
      title: 'Meetup summary - Navigating redundancy',
      excerpt: "In our bonus April 2023 meetup, we were excited to get the opportunity to hear from: Seep Gulati, software engineer at EstimateOne; Shannon Rowe, delivery leader; and Chris Regan, Chief People Officer...",
      category: 'Meetup Summary',
      author: 'Tech Leading Ladies',
      date: 'April 24, 2023',
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In our bonus April 2023 meetup, we were excited to get the opportunity to hear from: Seep Gulati, software engineer at EstimateOne; Shannon Rowe, delivery leader; and Chris Regan, Chief People Officer currently at MatchBox Exchange.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Seep shared her insights on how to stay resilient in the face of your role being made redundant. Then we heard from Shannon and Chris in a panel-style Q&A session facilitated by Michelle Gleeson, founder and CEO of Tech Diversity Lab.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">How to stay resilient in the face of your role being made redundant - Seep Gulati</h2>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          The tech industry has been thrown into a spin over the last year, with our once-secure jobs and career dissolved by the very companies we gave our loyalty to. When your role is made redundant, it can be a difficult situation to navigate, but it's important to remember that resilience is key. Seep, a software engineer and communication professional passionate about supporting other women in tech, who has experienced layoffs herself, shares her experiences and knowledge about resilience.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What is resilience?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Resilience can be compared to a rubber band, the ability to bounce back from changes and crises that life throws at you. It's not always the loudest voice in the room, but it can be a small voice pushing you in the right direction. Seep shared that every crisis can be seen as an opportunity, and it's important to take stock of your previous achievements and life journey. It's also okay to take a break and find what's making you uncomfortable. Remember, "this too shall pass."
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What can you do?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          When experiencing a layoff, it's important to remember the things that are under your control. What can you do to make things better? One way to find meaning is to help someone else in need or spend time with loved ones. Seep also encouraged us to channel our energy into things we enjoy such as reading, exercising, or pursuing hobbies. It's essential to evaluate your next options and take stock of the feedback you received from past roles.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Resilience is the first step, but the next stage is to become antifragile, where you benefit from disorder. This is the mindset that each challenge and obstacle helps you become stronger, better, and faster. Seep shared the book <a href="https://www.goodreads.com/book/show/13530973-antifragile" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:text-purple-700">"Antifragile: Things That Gain from Disorder"</a> by Nassim Nicholas Taleb, who uses the example of a Greek mythological serpent, Hydra – when one head is cut off, a new, stronger one grows in its place. This concept of antifragility is an evolution of resilience.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          As Maya Angelou said, "I can be changed by what happens to me, but I refuse to be reduced by it." Your identity is not linked with any organization, and your skills don't disappear with a layoff. It's important to think about the different roles you play in your life and how you add value.
        </p>
  
        <h2 class="text-3xl font-bold text-gray-900 mb-6 mt-12">Panel with Shannon and Chris</h2>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Michelle opens up the panel asking Shannon and Chris to give us an overview of how redundancy has had an impact on their lives.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Shannon has experienced redundancy six times and considers herself an "accidental expert" on the matter. She reflects that most of her experiences have been okay in retrospect. The first time, her role was made redundant after her company had undergone two acquisitions that resulted in the entire consulting arm being cut. She also experienced redundancy at a small company where the number of employees had gone from 20 to 40 and back to 20 before her role was made redundant again. During that redundancy, Shannon had to put together her own redundancy package and negotiated a contract to work three days a week to finish a customer project. She loved the job during her third redundancy but felt it was not done well. By her fourth redundancy, she aimed to always "exit with grace." Now, Shannon prefers to share the news of redundancy herself and has almost reached the point of laughing about experiencing redundancy six times over her six roles.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Chris has been in HR in the tech industry for a long time and has experienced redundancy from both sides. She reminds us that "the role is redundant, you aren't." During her second redundancy from a large corporation, she came back from parental leave and was holding onto a part-time position when she discovered that her role was one of three being made redundant. However, her boss refused to discuss the matter with her. If she had been brought into the loop earlier, Chris would have been happy to help with organizing the redundancy process. Chris highlights that even as the head of HR, she may not be informed or may not have a stake in the redundancy process and may only be told that it's happening and then have to deal with the aftermath.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">How do organizations decide who is made redundant?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Chris emphasized that the best processes for layoffs involve collaboration with HR. Ideally, all paths should be crossed before any redundancies take place. In her recent experience, the business forecast didn't match the market's perception of the product, which led to the company resorting to redundancies. Senior leadership should also be involved in making the decision on what should be cut next. During the pandemic, measures like reducing salaries, cutting hours in sales roles, and temporary stand-downs were implemented to minimize redundancies. In some cases, there was no other option but to let employees go after all other cost-cutting measures had been exhausted.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Can you do anything to not be made redundant?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          According to Chris, there is very little an individual can do to avoid being made redundant, as it primarily depends on the roles that the company needs. Heads of departments assess the roles they have and decide which functions are essential and which are not. Chris shared an example from a fintech role during the pandemic where the company shifted from issuing 100 loans a day to handling 100 hardship calls a day. The company was transparent about the situation, and it was a much more positive experience for the employees who thanked leadership for the transparency they were given. The level of transparency and respect that employees are giving during redundancies has a huge impact on how the process is experienced for everyone involved.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-4"><strong>Michelle:</strong> Tell us about the worst experience you've had with redundancy.</p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Shannon shared her worst experience of being made redundant, which was completely unexpected and done extremely quickly without any opportunity to talk to anyone about it. The reason given for the redundancy was performance-related, but there was loads of miscommunication which made it a negative experience. However, someone later told her that while the name on the business card changes, the relationships don't. Shannon realized that even though the company is not a family, she could still keep the relationships with the people she had made along the way if she wanted to.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Chris and Shannon shared their positive outlook on redundancy, stating that it can lead to opportunities that they would not have pursued otherwise and can force them out of their comfort zones. Shannon emphasized that most companies do the right thing regarding payouts and advised calling Fair Work or an employment lawyer for advice. She also shared that companies smaller than 15 do not have to offer a redundancy package, and if an employee earns more than a certain amount of money, they can be dismissed with no reason and no recourse, which is unrelated to redundancy. Chris recommended checking the Fair Work website for free legal advice and added that it is worth calling them to get reassurance, especially if the company has not dealt with redundancies before.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What can leaders do if they need to make people redundant?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Chris recommends leaders who need to make people redundant should consider partnering with HR to support the manager in having the conversations. If they don't feel comfortable doing that, they should treat the affected employees as humans and give them the news quickly at the start of the meeting. Ideally, they should have information about the timing, package, and redeployment options, and be prepared to answer questions to give the employees more comfort. Shannon suggested that it's worth asking if the employee can have a support person during the meeting. It is not a legal right, but some companies offer 24 hours for the employee to find someone. Chris shares that a company cannot legally refuse the request to have a support person assist the affected employee. The support person can take notes and help facilitate what the employee wants to achieve. As a leader, it's important to approach the situation with empathy and transparency to minimize any negative impact on the employee's well-being.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What are your tips for finding the next job?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Chris offers some valuable tips for finding the next job. Firstly, ensure that your CV is up to date and high quality, e.g. free of any spelling errors. Try not to get fixated on the number of people looking for jobs and ignore the noise. Focus on what you want to do next and get creative by networking and thinking deeply about your career path. Spend time with people who uplift you and things that nurture you, that fill your heart back up. Chris suggests attending every networking event, any free coaching opportunities, mentoring, and giving advice. She also recommends thinking outside the box and being open to different options. When Chris found a a role she wanted but wasn't at her desired salary, she asked for a 3 day week at the offered salary. She also took the time to reflect on her strengths and passions and was able to confidently share her experiences in interviews, being more bold than she had been before. Chris encourages job seekers to put themselves out there for the role even if they're not sure about meeting the requested experience.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-4"><strong>Michelle:</strong> Everything is cyclical. What's your experience finding the next gig?</p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Shannon shares that the first time was the hardest. She had gone from a big company to a bigger one but then wanted to work for a small consulting company in project management. However, she had no network and no experience. It took her five months to get a job in the middle of the dot com crash. Shannon advises joining the alumni slack of the company you have worked for and taking any opportunities that come within your network. LinkedIn can also be useful in finding job opportunities. She suggests thinking about the companies you want to work for and finding someone you know who works there to see if you can get an introduction. Shannon also recommends offering to make introductions to anyone in your network, as you never know when a hiring freeze might end.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-4"><strong>Michelle opens up to questions from the attendees.</strong></p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What advice would you give people who are struggling with survivors' guilt and uncertainty about upcoming redundancies?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Shannon shares that knowing about an upcoming redundancy round is hard, especially when it's drawn out. In her personal experience, the best is to do it in a day. There's no great way to make redundancies, but there are less bad ways. She has seen communication err more on the side of people leaving rather than people staying, making it unclear who was leaving and who was staying and what the teams will look like after the redundancies. The sooner the information is shared the better. Shannon suggests providing as much support as possible to all people affected. It takes time for people who stay to adjust.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Chris suggests that for people struggling with redundancy uncertainty, it's important to consider the human aspect and understand that uncertainty can lead to anxiety. To handle this, leadership teams can provide swift support to their teams and ensure that communication is handled properly to avoid survivor's guilt. It's crucial to ask for information from your leader or department head, find out what they know, and offer support to your team. This will help you gain a better understanding of the situation and help your team cope with the changes.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          It's natural that the current market conditions might make people nervous. What can we do for line reports who are nervous, even if nothing has been mentioned about redundancy? Chris suggests that it is completely understandable for people to be nervous in this type of situation. She advises to ask your manager to ask for some consistent messaging to share. She emphasizes that a clear roadmap should be shared and not to go back on it. A can make people really nervous. It is essential to be transparent about what is known and what is not known. For instance, if the strategy is for three months because the market is uncertain, then that should be communicated.
        </p>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Chris explains that the speed of the redundancy process varies based on factors such as the number and breadth of roles impacted. An ideal goal is to complete the process in one day, with preparation work happening beforehand. This includes researching programs like JobKeeper and putting together a frequently asked questions document. Shannon suggests asking leadership questions about strategies to address market conditions, especially in the context of mass layoffs in Australia. She notes that the EU is moving in a different direction by implementing a 4-day work week with reduced salaries, which can be less disruptive to a company and has been shown to increase productivity. Shannon encourages companies to crunch the numbers on alternative solutions instead of defaulting to mass layoffs. Michelle adds that anything can be solved with good communication and good people practices.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What is it like after being made redundant?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-8">
          Shannon and Chris both discussed the importance of allowing oneself to grieve after being made redundant. Shannon spoke about the similarities between the grieving process and the process of adjusting to job loss. She emphasized that it is important to give oneself the space to grieve and to be kind to oneself. Chris emphasized the importance of being supported by others. Shannon shared how others could support her such as through coffee meetings or joining her on walks. She even created a "funemployment" standup with others affected by redundancies to keep each other accountable. Both Shannon and Chris recognized that it is important to ask for help and support from others during this challenging time. Shannon shares it has gotten infinitely easier each time and is happy to share her experiences to help others.
        </p>
  
        <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-10">What is the "Next gig program"?</h3>
  
        <p class="text-gray-700 leading-relaxed mb-6">
          Shannon has graciously offered to help run a Next gig program for Tech Leading Ladies members! It is a regular weekly "standup" where a group of job seekers support each other and share updates, including a private channel discussion on the Tech Lead Ladies Slack. Keep in mind while you look for your next gig, as Michelle reminds us – if you have 3 years of experience, you are no longer a junior engineer. After about 9-12 months of experience, you should be on the lookout for mid-level engineer roles.
        </p>
      `
    }
  ];
  
  // Helper function to get a post by slug
  export const getPostBySlug = (slug: string): BlogPostData | undefined => {
    return blogPostsData.find(post => post.slug === slug);
  };
  
  // Helper function to get related posts (excluding current post)
  export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPostData[] => {
    return blogPostsData
      .filter(post => post.slug !== currentSlug)
      .slice(0, limit);
  };
  
  // Helper function to get previous and next posts
  export const getAdjacentPosts = (currentSlug: string): { prev: BlogPostData | null; next: BlogPostData | null } => {
    const currentIndex = blogPostsData.findIndex(post => post.slug === currentSlug);
  
    if (currentIndex === -1) {
      return { prev: null, next: null };
    }
  
    return {
      prev: currentIndex > 0 ? blogPostsData[currentIndex - 1] : null,
      next: currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null
    };
  };