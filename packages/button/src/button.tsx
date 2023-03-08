import { defineComponent } from 'vue'
import { buttonProps } from './types'

const NAME = 'ymss-button'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'


export default defineComponent({
  name: NAME,
  props: buttonProps,
  setup(props, context) {
    console.log(props, context)
    const onBtnClick = () => {
      console.log('点击按钮测试', props.msg)
    }
    return () => (
      <div class={NAME}>
        <h1>ymss-button</h1>
        <p class={NAME + '__description'} style={"color:"+ props.backColor +""} >msg is: {props.msg}</p>
        <el-button type='primary' onClick={onBtnClick}>点击我</el-button>
      </div>
    )
  }
})
