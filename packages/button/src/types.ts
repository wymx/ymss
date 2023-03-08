import { ExtractPropTypes } from 'vue'

export const buttonProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  },
  type: {
    type: String,
    required: false,
    default: 'blue'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
