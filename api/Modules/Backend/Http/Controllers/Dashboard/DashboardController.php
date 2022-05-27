<?php

namespace Modules\Backend\Http\Controllers\Dashboard;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use \DB;
class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function topBarCount()
    {
        $topBarCount = DB::
            select(DB::raw
                    ('SELECT (SELECT COUNT(*) FROM exchange WHERE deleted_at IS NULL)  as exchangeCount ,'
                    . ' (SELECT COUNT(*) FROM coins WHERE deleted_at IS NULL) as coinsCount,'
                    . ' (SELECT COUNT(*) FROM users WHERE deleted_at IS NULL) as usersCount,'
                    . ' (SELECT COUNT(*) FROM networks WHERE deleted_at IS NULL) as networksCount,'
                    . ' (SELECT COUNT(*) FROM nft_lsting WHERE deleted_at IS NULL) as nftlstingCount'
                    )
                )
            ;
        return response()->json([ 'data' => $topBarCount ]);   
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('backend::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('backend::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('backend::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }
}
