<?php

namespace Modules\Backend\Http\Controllers\CronJob;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CronJobController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function coincapJob()
    {
         
        $tasks = array('bitcoin','ethereum'); // get this from table
        $api_url = 'api.coincap.io/v2/assets/';
        $response = $this->process_api($tasks, $api_url);
        dd($response); //process the data to table
        
    }
/**
     * process api request.
     * @param $tasks:array
     * @param $api_url:string
     * @return array data
     */
    public function process_api($tasks,$api_url)
    {
            $array = $response =[];  $active = null;
            if(!empty($tasks)): 
                $cmh = curl_multi_init();  
                foreach ($tasks as $i => $thread) :  
                   
                    //$url = "https://api.coinpaprika.com/v1/tickers/".strtolower($thread['symbol']).'-'.str_replace(" ","-",strtolower($thread['name'])); 
                    $url = $api_url.strtolower($thread);
                //dd($url);
                    $ch = curl_init($url); 
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($ch, CURLOPT_ENCODING, '');
                    curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
                    curl_setopt($ch, CURLOPT_TIMEOUT, 0);
                    curl_setopt($ch, CURLOPT_FOLLOWLOCATION , true);
                    curl_setopt($ch, CURLOPT_HTTP_VERSION  , CURL_HTTP_VERSION_1_1);
                    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET"); 
                    //curl_setopt($ch, CURLOPT_HTTPHEADER, array( "Content-Type:application/json", "Accept:application/json")) ;
                    
                    $array[$i] = $ch;  curl_multi_add_handle($cmh, $ch); 
                endforeach; 

                do { $mrc = curl_multi_exec($cmh, $active); } while ($mrc == CURLM_CALL_MULTI_PERFORM); 
                while ($active && $mrc == CURLM_OK) 
                { 
                    if (curl_multi_select($cmh) != -1):
                        do 
                        {   
                            $mrc = curl_multi_exec($cmh, $active); 
                            $info = curl_multi_info_read($cmh);  
                            if (isset($info['msg']) && $info['msg'] == CURLMSG_DONE):    
                                $ch = $info['handle']; $result = curl_multi_getcontent($ch); 
                                if($result && $result !=''):
                                    $url = array_search($ch, $array);  
                                    $response[$url]['request'] = $tasks[$url];
                                    $response[$url]['response']  = json_decode($result); 
                                endif; 
                                curl_multi_remove_handle($cmh, $ch); curl_close($ch);  
                            endif;

                        } while ($mrc == CURLM_CALL_MULTI_PERFORM);
                    endif;
                } 
                curl_multi_close($cmh);  
            endif;
            return $response;
   }
     
      
     
   
   
   
}
