export default function BlogPost() {
  return (
    <div className="w-full mx-auto px-2 md:px-4 py-8">
      {/* Health News Badge */}
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-600 text-white mb-3">
        Health News
      </span>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Common Challenges Nurses Face When Moving Abroad & How to Overcome Them
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-2 mb-6">
        <img
          src="https://v0.dev/placeholder.svg?height=32&width=32"
          alt="Author"
          className="w-8 h-8 rounded-full border border-gray-200"
        />
        <div className="text-sm text-gray-600">
          <span className="font-medium">Olivia Wilson</span>
          <span className="ml-2">August 31, 2023</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-6 rounded-md overflow-hidden">
        <img
          src="/public/oversabinurse/article1.png"
          alt="Nurses moving abroad illustration showing a plane, globe and medical bag"
          className="w-full h-96 md:h-96 object-cover bg-teal-700"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-4 max-w-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor consequat nisi, ac finibus massa
          ullamcorper vel. Phasellus eu cursus mauris. Sed vitae felis vel nisi dignissim lacinia. Aenean sagittis diam
          ac velit condimentum, vel ultrices enim tempor. Duis eget tortor vitae nulla pharetra ornare. Etiam non magna
          in eros molestie elementum. Cras ut est condimentum, euismod magna sed, ullamcorper tortor.
        </p>

        <p className="text-gray-600 mb-4 max-w-none">
          Suspendisse vel ipsum vel enim varius venenatis. Sed nulla ipsum, pretium felis pulvinar, vulputate vitae,
          varius vel purus. Etiam felis pede, commodo quis, vehicula vitae, rutrum non, enim. Ut condimentum, pede quis
          vehicula accumsan, enim felis euismod tellus, in rutrum enim nisl id augue. Fusce porta magna vel velit.
          Curabitur et odio. Ut eleifend, felis quis posuere auctor, pede sem cursus enim, quis sodales ipsum urna ut
          sapien. Suspendisse sed tortor vel tellus sagittis varius.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Our advice when planning a move</h2>

        <p className="text-gray-600 mb-4 max-w-none">
          Cras efficitur purus sed porttitor volutpat. Sed feugiat neque rhoncus placerat. Maecenas ac dapibus sodales,
          vitae. Sed nulla velit, fermentum at volutpat at, congue sed mi. Cras euismod viverra metus, in commodo sem
          molestie nec. Proin blandit mauris sed lorem ultrices, vitae pharetra libero molestie. Aenean ipsum magna,
          faucibus at imperdiet vel, ultrices in nibh. Sed condimentum lorem egestas eu. Nunc vehicula posuere mauris,
          ac bibendum magna tincidunt sed.
        </p>

        <p className="text-gray-600 mb-4 max-w-none">
          Suspendisse rutrum condimentum lorem vel ultrices. Sed rutrum pretium gravida. Morbi pulvinar vulputate nibh,
          vitae vulputate felis finibus quis. Curabitur sit amet sapien felis. Proin sagittis lacinia erat. Maecenas
          congue convallis nisi, sit amet pretium felis ornare ut. Curabitur hendrerit, eros sed tincidunt gravida,
          nulla augue blandit lorem, vitae varius sapien sem id sapien. Sed tempus vulputate lacus, at hendrerit purus
          placerat quis. In vitae elit dapibus, venenatis velit quid, pharetra ipsum.
        </p>

        {/* Added Healthcare Professionals Image */}
        <div className="my-8">
          <img
            src="/public/oversabinurse/article2.png"
            alt="Diverse group of healthcare professionals in scrubs standing together"
            className="w-full h-96 md:h-96 object-cover bg-teal-600 rounded-md" 
          />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">Building a global healthcare community</h2>

        <p className="text-gray-600 mb-4 max-w-none">
          One of the most exciting things about working as a nurse internationally is joining a diverse healthcare team.
          Each new role has the potential to expand your professional network and expose you to different approaches to
          patient care. Many nurses find that working with colleagues from different cultural backgrounds enhances their
          problem-solving abilities and broadens their perspective on healthcare. This cultural exchange can be one of
          the most rewarding aspects of an international nursing career.
        </p>

        <p className="text-gray-600 mb-4 max-w-none">
          When preparing for an international move, it's important to research the healthcare system of your destination
          country. Each country has unique regulations, nursing education requirements, and practice protocols that may
          be different from what you're accustomed to. Understanding these differences in advance can help ease your
          transition and allow you to focus on building relationships with your new colleagues rather than navigating
          unexpected regulatory challenges.
        </p>

        <p className="text-gray-600 mb-4 max-w-none">
          Language barriers are another hurdle many international nurses face. While medical terminology is standardized
          in many ways, colloquial language and everyday communication with patients and colleagues can be challenging.
          Many hospitals offer language support programs to help international nurses adapt to their new environment.
          Taking advantage of these resources, as well as practicing the local language before your move, can
          significantly improve your experience and help you integrate more quickly into your new team.
        </p>

        <p className="text-gray-600 mb-4 max-w-none">
          Work-life balance is another important consideration when transitioning abroad. Standards of practice may be
          different in your new country, and adjusting to new shift patterns, documentation requirements, and patient
          ratios can be stressful. Remember that adaptation takes time, and giving yourself grace as you learn new
          systems will help you manage the transition more successfully. Many international nurses find that connecting
          with other expatriates in healthcare provides a valuable support system while gradually building relationships
          with local colleagues.
        </p>
      </div>
    </div>
  );
}