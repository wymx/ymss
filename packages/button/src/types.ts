import { ExtractPropTypes } from 'vue'

export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger','text']

export const buttonProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  },
  type: {
      type: String,
      validator(value: string) {
        //这里表示type只能接收这些值
        return ButtonType.includes(value)
      }
    }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
