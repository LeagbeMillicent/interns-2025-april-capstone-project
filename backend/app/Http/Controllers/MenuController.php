<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menu = Menu::all();

        if ($menu->isEmpty()) {
            return response()->json([
                'message' => 'No menus available.',
                'data' => []
            ], 200);
        }

        return response()->json([
            'message' => 'Menus retrieved successfully.',
            'data' => $menu
        ], 200);
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $filename = null;

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('menu', $filename, 'public');
        }

        // $imageUrl = $filename ? public_path('uploads/' . $filename) : null;

        $menu = Menu::create([
            'name' => $request->name,
            'price' => $request->price,
            'image' => $filename,
            'description' => $request->description,
            'category_id' => $request->category_id,
        ]);

        return response()->json([
            'message' => 'Menu created.',
            'data' => $menu
        ], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Code to show a specific menu
        $menu = Menu::findOrFail($id);

        if (!$menu) {
            return response()->json([
                'message' => 'Menu not found.'
            ], 404);
        }
        return response()->json([
            'message' => 'Menus retrieved successfully.',
            'data' => $menu
        ], 200);
    }


    /**
     * Update the specified resource in storage.
     */


    public function update(Request $request, $id)
    {
        $menu = Menu::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'nullable|string',
            'category_id' => 'sometimes|required|exists:categories,id',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($menu->image) {
                $oldFilename = basename($menu->image);
                $oldPath = 'public/uploads/' . $oldFilename;

                if (Storage::exists($oldPath)) {
                    Storage::delete($oldPath);
                }
            }

            $file = $request->file('image');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/uploads', $filename);
            $menu->image = asset('storage/uploads/' . $filename);
        }

        if ($request->has('name')) $menu->name = $request->name;
        if ($request->has('price')) $menu->price = $request->price;
        if ($request->has('description')) $menu->description = $request->description;
        if ($request->has('category_id')) $menu->category_id = $request->category_id;

        $menu->save();

        return response()->json([
            'message' => 'Menu item updated successfully.',
            'data' => $menu
        ], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Code to delete a specific menu
        $menu = Menu::findOrFail($id);
        if (!$menu) {
            return response()->json(['message' => 'Menu not found'], 404);
        }

        $menu->delete();
        return response()->json(['message' => 'Menu deleted successfully'], 204);
    }
}
