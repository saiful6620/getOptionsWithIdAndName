# getOptionsWithIdAndName
This function will take an array of object and will modify each object based on the key provided and will add 'id' and 'name' key in each object. This is helpful library like react select or types of lib where each option type is like {id: 1, name: khan}}

# Usage 

```
interface PromptVersionBase {
  prompt_v_id: number
  prompt_id: number
  consumer_id: number
  model_id: number
  version: number
  prompt_name: string
  prompt_template: string
  active: boolean
  params: IParams
  is_prod: boolean
  is_staging: boolean
  created_at: string | null
  updated_at: string | null
}
type PromptVersion = Partial<PromptVersionBase>

const data:PromptVersion[] = [...]

const options = getOptionsWithIdAndName<PromptVersion>(
           data,
          'prompt_v_id',
          'prompt_name',
        )
```
Now your returned data will have object with ```id``` and ```name``` key

