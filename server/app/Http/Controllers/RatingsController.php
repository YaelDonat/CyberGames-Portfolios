<?php

namespace App\Http\Controllers;

use App\Http\Resources\RatingsResource;
use App\Http\Requests\StoreRatingsRequest;
use App\Http\Requests\UpdateRatingsRequest;
use App\Models\Ratings;
use Illuminate\Http\Request;

class RatingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return RatingsResource::collection(Ratings::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRatingsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRatingsRequest $request)
    {
        $result = Ratings::create($request->validated());
        return new RatingsResource($result);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Ratings $rating
     * @return \Illuminate\Http\Response
     */
    public function show(Ratings $rating, Request $request)
    {
        $user = $request->user();
        if($user->id !== $rating->user_id){
            return abort(403,'Action non autorisée.');
        }

        return new RatingsResource($rating);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRatingsRequest $request
     * @param  \App\Models\Ratings $rating
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRatingsRequest $request, Ratings $rating)
    {
        $rating->update($request->validated());
        return new RatingsResource($rating);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ratings  $rating
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ratings $rating, Request $request)
    {
        $user = $request->user();
        if($user->id !== $rating->user_id){
            return abort(403,'Action non autorisée.');
        }
        $rating->delete();
        return response('',204);
    }
}
