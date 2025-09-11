import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  admin: { group: 'Home Page' },
  fields: [
    {
      name: 'carousel_sliders',
      label: 'Carousel Slider',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        { name: 'heading', label: 'Heading', type: 'text', required: true },
        {
          name: 'subheading',
          label: 'SubHeading',
          type: 'textarea',
          required: true,
        },
        {
          name: 'project_image',
          label: 'Project Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
