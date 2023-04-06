import { defineComponent } from 'vue'
import { buttonProps } from './types'
import { testLog } from '@ymss-ui/utils'

const NAME = 'ymss-button'

export default defineComponent({
  name: NAME,
  props: buttonProps,
  setup(props, context) {
    console.log(props, context)
    const onBtnClick = () => {
      console.log('点击按钮测试', props.msg)
      testLog(props.msg)
    }
    // return () => (
    //   <div class={NAME}>
    //     <h1>ymss-button</h1>
    //     <p class={NAME + '__description'} >msg is: {props.msg}</p>
    //     <el-button type={props.type} onClick={onBtnClick}>点击我</el-button>
    //   </div>
    // )
    return () => (
      <div class={NAME}>
        <el-button type={props.type} onClick={onBtnClick}>
        <slot/>
        </el-button>
      </div>
    )
  }
})
