<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Http\Requests\StoreCommentsRequest;
use App\Http\Requests\UpdateCommentsRequest;
use App\Http\Resources\CommentsResource;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();
        return CommentsResource::collection(Comments::where('user_id',$user->id)->paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCommentsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCommentsRequest $request)
    {
        $result = Comments::create($request->validated());
        return new CommentsResource($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comments  $comments
     * @return \Illuminate\Http\Response
     */
    public function show(Comments $comments, Request $request)
    {
        $user = $request->user();
        if($user->id !== $comments->user_id){
            return abort(403,'Action non autorisée.');
        }

        return new CommentsResource($comments);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommentsRequest  $request
     * @param  \App\Models\Comments  $comments
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCommentsRequest $request, Comments $comments)
    {
        $comments->update($request->validated());
        return new CommentsResource($comments);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comments  $comments
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comments $comments, Request $request)
    {
        $user = $request->user();
        if($user->id !== $comments->user_id){
            return abort(403,'Action non autorisée.');
        }
        $comments->delete();
        return response('',204);
    }
}
